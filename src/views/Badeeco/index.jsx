import React, { Component } from 'react';
import AgGrid from '../../common/grid'
import { createStyles, withStyles } from '@material-ui/styles';
import { connect } from 'react-redux'
import * as actions from './actions'

const useStyles = createStyles({
    root: {
        padding: 32
    }
});

class Badeeco extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getAllBadeeco()
    }
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <div style={{ width: '100%', display: 'inline-flex' }}>
                    <AgGrid columnDefs={this.props.data.columnDefs} rowData={this.props.data.rowData} />
                </div>
            </div>
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