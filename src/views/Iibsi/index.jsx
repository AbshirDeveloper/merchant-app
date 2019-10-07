import React, { Component } from 'react';
import { createStyles, withStyles } from '@material-ui/styles';

const useStyles = createStyles({
    root: {
        padding: 32
    }
});

class Iibsi extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <span>iibsi</span>
            </div>
        );
    }
}

export default withStyles(useStyles)(Iibsi);