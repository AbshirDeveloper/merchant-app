import React, { Component } from 'react';
import AgGrid from '../../common/grid'
import { createStyles, withStyles } from '@material-ui/styles';
import Card from '../../common/reUsableComponents/Card'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import * as actions from './actions'
import {
    connect
} from 'react-redux'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        // maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        // margin: theme.spacing(4, 0, 2),
    },
}));

const cardInfo = [
    {
        name: 'Totalk Amaanada',
        amount: '$55'
    }
]

function InteractiveList() {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    return (
        <div className={classes.root}>
            <Grid item xs={12} md={6} style={{ maxWidth: '100%' }}>
                <Typography variant="h6" className={classes.title}>
                </Typography>
                <div className={classes.demo}>
                    <List dense={dense}>
                        {cardInfo.map(el => {
                            return (
                                <ListItem key={el.name}>
                                    <ListItemIcon>
                                        <FolderIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={el.name}
                                        secondary={secondary ? 'Secondary text' : null}
                                    />
                                    <ListItemText
                                        style={{ float: 'right' }}
                                        primary={el.amount}
                                        secondary={secondary ? 'Secondary text' : null}
                                    />
                                </ListItem>
                            )
                        }
                        )}
                    </List>
                </div>
            </Grid>
        </div>
    );
}

const useStyle = createStyles({
    root: {
        padding: 32
    }
});

class Amaano extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        this.props.getAllAmano()
    }
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <div style={{ width: '68%', display: 'inline-block' }}>
                    <AgGrid columnDefs={this.props.data.columnDefs} rowData={this.props.data.rowData} />
                </div>
                <div style={{ float: 'right', width: '31%' }}>
                    <Card>
                        <InteractiveList />
                    </Card>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyle)(Amaano));