import React, { Component } from 'react';
import AgGrid from '../../common/grid'
import { createStyles, withStyles } from '@material-ui/styles';
import * as actions from './actions'
import DatePickers from '../Xisaabiye/components/DatePickers'
import {
    connect
} from 'react-redux'
import DynamicCard from '../../common/DynamicCard'
import Card from '../Xisaabiye/components/Card'

const useStyles = createStyles({
    root: {
        padding: 32,
        width: '100%'
    }
});


class Amaano extends Component {
    componentDidMount() {
        this.props.getAllAmano()
    }
    render() {
        const { classes } = this.props
        const iskudar = '34';
        const lafo = '15';
        const faiido = '19'
        return (
            <div className="parent">
                <div className="card" style={{ width: '100%d', isplay: 'inline-block' }}>
                    <DynamicCard>
                        <DatePickers />
                    </DynamicCard>
                </div>
                <AgGrid style={{ width: '30%', float: 'left' }} columnDefs={this.props.data.columnDefs} rowData={this.props.data.rowData} />
                <div className="cards">
                    <div style={{ float: 'right', width: '30%' }}>
                        <div style={{ width: '90%', display: 'inline-block' }}>
                            <DynamicCard>
                                <Card style={{ float: 'right' }} formElements={[]} color={{ lacag: 'green', magac: 'Black' }} cartTotal={faiido} type={'Total'} cartSummary={''} classes={classes} />
                            </DynamicCard>
                        </div>
                    </div>
                </div >
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.amano.data
    }
}

const mapDispatchToProps = {
    ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Amaano));