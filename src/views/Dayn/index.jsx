import React, { Component } from 'react';
import AgGrid from '../../common/grid'
import { createStyles, withStyles } from '@material-ui/styles';
// import Card from '../../common/reUsableComponents/Card'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import * as actions from './actions'
import { connect } from 'react-redux'
import DynamicCard from '../../common/DynamicCard'
import './index.css'
import DatePickers from '../Xisaabiye/components/DatePickers'
import Card from '../Xisaabiye/components/Card'

const useStyles = createStyles({
    root: {
        padding: 32,
        width: '100%'
    }
});

class Dayn extends Component {
    componentDidMount() {
        this.props.getAllDayn()
    }
    render() {
        const { classes } = this.props
        const iskudar = '34';
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
                                <Card formElements={[]} cartTotal={iskudar} color={{ lacag: 'red', magac: 'black' }} cartSummary={''} type={'Total'} classes={classes} />
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
        data: state.dayn.data
    }
}


export default connect(mapStateToProps, {
    ...actions
})(withStyles(useStyles)(Dayn));