import React, { Component } from 'react';

import { createStyles, withStyles } from '@material-ui/styles';

const useStyles = createStyles({
    root: {
        padding: 32
    }
});

class Badeeco extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <span>Badeeco</span>
            </div>
        );
    }
}

export default withStyles(useStyles)(Badeeco);