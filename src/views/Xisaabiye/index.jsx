import React, { Component } from 'react';
import DynamicCard from '../../common/DynamicCard'
import { createStyles, withStyles } from '@material-ui/styles';
import Card from './components/Card'
import './index.css';
import DatePickers from './components/DatePickers'
import * as actions from './actions'
import { connect } from 'react-redux'
import AgGrid from '../../common/grid'

const useStyles = createStyles({
    root: {
        padding: 32,
        width: '100%'
    }
});

class Xisaabiye extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: []
        }
    }
    componentDidMount() {
        this.props.getAllXisaab()
    }

    sendSelectedValue = (value) => {
        const selectedOptions = value
        this.props.getAllXisaab(selectedOptions)
    }

    totalCalculator = (data) => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return data.reduce(reducer)
    }


    render() {
        const cards = this.props.data.cards ? this.props.data.cards.map(el => {
            const columnArray = this.props.data.rowData.map(element => +element[el.column])
            return {
                ...el,
                total: this.totalCalculator(columnArray)
            }
        }) : []
        const { classes } = this.props
        const dropDownOptions = this.props.data.types

        return (
            <div className="parent">
                <div className="card" style={{ width: '100%d', isplay: 'inline-block' }}>
                    <DynamicCard>
                        <DatePickers sendSelectedValue={this.sendSelectedValue} dropDownOptions={dropDownOptions} />
                    </DynamicCard>
                </div>
                <AgGrid style={{ width: '30%', float: 'left' }} columnDefs={this.props.data.columnDefs} rowData={this.props.data.rowData} />
                <div className="cards">
                    <div style={{ float: 'right', width: '30%' }}>
                        {cards.map(el => {
                            return (
                                <div key={el.id} style={{ width: '90%', display: 'inline-block' }}>
                                    <DynamicCard>
                                        <Card
                                            formElements={[]}
                                            cartTotal={el.total}
                                            color={{ lacag: el.valueColor, magac: el.nameColor }}
                                            cartSummary={''}
                                            type={el.description}
                                            classes={classes} />
                                    </DynamicCard>
                                </div>
                            )
                        })}
                    </div>
                </div >
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.xisaabiye.data
    }
}

export default connect(mapStateToProps, { ...actions })(withStyles(useStyles)(Xisaabiye));