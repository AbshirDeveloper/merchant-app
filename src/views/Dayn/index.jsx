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
import { connect } from 'react-redux'

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

function generate(element) {
    return [0, 1, 2].map(value =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

const cardInfo = [
    {
        name: 'Totalk Daynta',
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
    },
    card: {
        // maxWidth: 345,
    },
    media: {
        height: 0,
        // paddingTop: '56.25%', // 16:9
    },
    expand: {
        // transform: 'rotate(0deg)',
        marginLeft: 'auto',
        // transition: theme.transitions.create('transform', {
        //   duration: theme.transitions.duration.shortest,
        // }),
    },
    expandOpen: {
        // transform: 'rotate(180deg)',
    },
    avatar: {
        // backgroundColor: red[500],
    },
});

class Dayn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expanded: false,
            columnWidth: 150,

        }
    }

    componentDidMount() {
        this.props.getAllDayn()
    }

    handleExpandClick = () => {
        this.setState({
            expanded: !this.state.expanded
        })
    };

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <div style={{ width: '65%', display: 'inline-block' }}>
                    <AgGrid columnDefs={this.props.data.columnDefs} rowData={this.props.data.rowData} />
                </div>
                <div style={{ float: 'right', width: '34%' }}>
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
        data: state.dayn.data
    }
}


export default connect(mapStateToProps, {
    ...actions
})(withStyles(useStyle)(Dayn));