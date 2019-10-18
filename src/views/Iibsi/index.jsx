import React, { Component } from 'react';
import { createStyles, withStyles } from '@material-ui/styles';
import { connect } from 'react-redux'
import * as actions from './actions'
import AgGrid from '../../common/grid'
import DynamicCard from '../../common/Card'
import Search from '../../common/Search'

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
            }
        }
    }

    componentDidMount() {
        this.props.getAllBadeeco()
    }


    objectSearched = (obj) => {
        this.props.addProductToCart(obj)
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
                <Search classes={classes} badeeco={this.props.badeeco} objectSearched={this.objectSearched} />
                <div style={{ width: '65%', display: 'inline-block' }}>
                    <AgGrid columnDefs={this.props.cart.columnDefs} rowData={this.props.cart.rowData} />
                </div>
                <DynamicCard formElements={this.state.formElements} cartTotal={cartTotal} cartSummary={cartSummary} classes={classes} />
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