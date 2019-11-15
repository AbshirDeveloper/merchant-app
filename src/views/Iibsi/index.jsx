import React, { Component } from 'react';
import { createStyles, withStyles } from '@material-ui/styles';
import { connect } from 'react-redux'
import * as actions from './actions'
import AgGrid from '../../common/grid'
import DynamicCard from '../../common/DynamicCard'
import Search from '../../common/Search'
import Card from './components/Card'
import DefaultCard from './components/defaultCard'
import './index.css'
import Popper from './components/Popper'

const useStyles = createStyles({
    root: {
        padding: '1.5%',
        width: '100%',
        display: 'inline-flex'
    },
    form: {
        width: '100%',
        display: 'inline-block',
        '& div': {
            marginTop: '0px'
        },
        '& button': {
            marginTop: '0px !important'
        }
    },
    textField: {
        marginLeft: 8,
        marginRight: 0,
    },
    wrapper: {
        backgroundColor: 'yellow'
    }
});

class Iibsi extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            disabled: true,
            label: "Kuqur magaca badeecada",
            formElements: {
                textFields: [
                    {
                        required: true,
                        id: 1,
                        label: 'Magac',
                        name: 'magac'
                    },
                    {
                        required: true,
                        id: 2,
                        label: 'Taleefon',
                        name: 'taleefon'
                    },
                    {
                        required: true,
                        id: 3,
                        label: 'Magaalo',
                        name: 'magaalo'
                    }
                ],
                dropDowns: [
                    {
                        required: true,
                        id: 1,
                        default: 'Qof Iska caadi',
                        name: 'nooc',
                        label: 'Nooc',
                        innerList: [
                            {
                                value: 'Macmiil',
                                label: 'Macmiil'
                            },
                            {
                                value: 'Qof Iska caadi',
                                label: 'Qof Iska caadi'
                            }
                        ]

                    }
                ],
                dateFields: [
                    {
                        required: true,
                        id: 1,
                        label: 'Taariikh',
                        name: 'taariikh'
                    }
                ],
                buttons: [
                    {
                        type: 'submit',
                        id: 1,
                        label: 'Submit'
                    }
                ]
            },
            mainMerchangt: [
                {
                    id: 1,
                    magac: 'Xawaash',
                    haraa: 22
                },
                {
                    id: 2,
                    magac: 'Saliid',
                    haraa: 60
                },
                {
                    id: 3,
                    magac: 'Ukun',
                    haraa: 5
                },
                {
                    id: 4,
                    magac: 'Xawaash',
                    haraa: 22
                },
                {
                    id: 5,
                    magac: 'Saliid',
                    haraa: 60
                },
                {
                    id: 6,
                    magac: 'Ukun',
                    haraa: 5
                }
            ],
            openPopper: false,
            selectedProduct: {}
        }
    }

    componentDidMount() {
        this.props.getAllBadeeco()
    }


    objectSearched = (obj) => {
        this.props.addProductToCart(obj)
    }

    cardClicked = (obj) => {
        const newObj = {
            ...obj,
            barcode: obj.barcode,
            badeeco: obj.badeeco,
            qiimo_halkii_xabo: obj.qiimo_halkii_xabo,
            iskudar: 1 * obj.qiimo_halkii_xabo
        }
        this.setState({
            selectedProduct: newObj,
            openPopper: true
        })
    }

    handleClickAway = () => {
        this.setState({
            openPopper: false
        })
    }

    handleContinueFromPopper = (newObj) => {
        this.props.addProductToCart(newObj)
        this.handleClosePopper()
    }

    handleClosePopper = () => {
        this.setState({
            openPopper: false
        })
    }

    render() {
        const { classes } = this.props
        const cartSummary = this.props.cart.rowData.map(el => {
            return {
                id: el.id,
                intaxabo: el.intaxabo
            }
        });
        const totals = this.props.cart.rowData.length && this.props.cart.rowData.map(el => el.iskudar)
        const cartTotal = totals && totals.reduce((accumulator, currentValue) => accumulator + currentValue)
        return (
            <div className={classes.root}>
                <Popper
                    open={this.state.openPopper}
                    selectedProduct={this.state.selectedProduct}
                    handleContinueFromPopper={this.handleContinueFromPopper}
                    handleClosePopper={this.handleClosePopper}
                />
                <div className="leftSection">
                    <Search classes={classes} badeeco={this.props.badeeco} objectSearched={this.objectSearched} />
                    <div>
                        {
                            this.props.badeeco.rowData && this.props.badeeco.rowData.map(el => {
                                return (
                                    <div onClick={() => this.cardClicked(el)} key={el.id}>
                                        <DynamicCard>
                                            <div style={{ width: '100%' }}>
                                                <DefaultCard badeeco={el} />
                                            </div>
                                        </DynamicCard>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div style={{ width: '38%', display: 'inline-block' }}>
                    <AgGrid columnDefs={this.props.cart.columnDefs} rowData={this.props.cart.rowData} />
                </div>
                <DynamicCard>
                    <Card formElements={this.state.formElements} cartTotal={cartTotal} cartSummary={cartSummary} classes={classes} />
                </DynamicCard>
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.iibsi.cart,
        badeeco: state.badeeco.data
    }
}

export default (withStyles(useStyles)(connect(mapStateToProps, {
    ...actions
})(Iibsi)))