import React, { Component } from 'react';
import AgGrid from '../../common/grid'
import { createStyles, withStyles } from '@material-ui/styles';
import { connect } from 'react-redux'
import * as actions from './actions'
import Form from '../../common/form'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DynamicCard from '../../common/DynamicCard'

const useStyles = createStyles({
    root: {
        padding: 12
    },
    heading: {
        color: 'green',
        fontSize: 'large'
    }
});

class Badeeco extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formElements: {
                textFields: [
                    {
                        required: true,
                        id: 1,
                        label: 'Magac Badeecada',
                        name: 'magac_badeeco'
                    },
                    {
                        required: true,
                        id: 2,
                        label: 'Inta Xabo',
                        name: 'intaxabo'
                    },
                    {
                        required: true,
                        id: 3,
                        label: 'Barcode',
                        name: 'barcode'
                    }
                ],
                // dropDowns: [
                //     {
                //         required: true,
                //         id: 1,
                //         default: 'Qof Iska caadi',
                //         name: 'nooc',
                //         label: 'Nooc',
                //         innerList: [
                //             {
                //                 value: 'Macmiil',
                //                 label: 'Macmiil'
                //             },
                //             {
                //                 value: 'Qof Iska caadi',
                //                 label: 'Qof Iska caadi'
                //             }
                //         ]

                //     }
                // ],
                // dateFields: [
                //     {
                //         required: true,
                //         id: 1,
                //         label: 'Taariikh',
                //         name: 'taariikh'
                //     }
                // ],
                buttons: [
                    {
                        type: 'Qor Badeeco',
                        id: 1,
                        label: 'qor_badeeco'
                    }
                ]
            }
        }
    }

    componentDidMount() {
        this.props.getAllBadeeco()
    }

    onDaynSubmit = (info) => {
        const cartTotal = this.props.cartTotal
        this.props.onDaynSubmit({
            info,
            cartTotal
        });
    }

    render() {
        const { classes } = this.props
        return (
            <React.Fragment>
                <div className="card" style={{ width: '100%d', isplay: 'inline-block' }}>
                    <DynamicCard>
                        <ExpansionPanel>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>Qor Badeeco Cusub</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <div style={{ width: '100%' }}>
                                    <Form onDaynSubmit={this.onDaynSubmit} formElements={this.state.formElements} />
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </DynamicCard>
                </div>
                <AgGrid style={{}} columnDefs={this.props.data.columnDefs} rowData={this.props.data.rowData} />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.badeeco.data
    }
}

const mapDispatchToProps = {
    ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Badeeco));