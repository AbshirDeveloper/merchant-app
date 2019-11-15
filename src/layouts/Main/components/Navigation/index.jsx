import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import { Divider, Drawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Profile, SidebarNav, UpgradePlan } from '../Sidebar/components';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-prevent-tabpanel-${index}`}
            aria-labelledby={`scrollable-prevent-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-prevent-tab-${index}`,
        'aria-controls': `scrollable-prevent-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    item: {
        display: 'flex',
        paddingTop: 0,
        paddingBottom: 0
    },
    button: {
        // color: colors.blueGrey[800],
        padding: '10px 8px',
        justifyContent: 'flex-start',
        textTransform: 'none',
        letterSpacing: 0,
        width: '100%',
        fontWeight: theme.typography.fontWeightMedium
    },
    icon: {
        color: theme.palette.icon,
        width: 24,
        height: 24,
        display: 'flex',
        alignItems: 'center',
        marginRight: theme.spacing(1)
    },
    active: {
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightMedium,
        '& $icon': {
            color: theme.palette.primary.main
        }
    },
    tabs: {
        '& > header > ul': {
            display: 'inline-flex',
            maxHeight: '39px',
            minWidth: '675px'
        }
    }
}));

export default function ScrollableTabsButtonPrevent() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const pages = [
        {
            title: 'Iibsi',
            href: '/iibsi',
            icon: <DashboardIcon />
        },
        {
            title: 'Badeeco',
            href: '/badeeco',
            icon: <PeopleIcon />
        },
        {
            title: 'Xisaabiye',
            href: '/xisaabiye',
            icon: <ShoppingBasketIcon />
        },
        // {
        //     title: 'Dayn',
        //     href: '/Dayn',
        //     icon: <LockOpenIcon />
        // },
        // {
        //     title: 'Amaano',
        //     href: '/amaano',
        //     icon: <TextFieldsIcon />
        // },
        // {
        //     title: 'Sign In',
        //     href: '/signin',
        //     icon: <TextFieldsIcon />
        // },
    ];

    return (
        <div className={classes.tabs}>
            <AppBar position="static">
                <SidebarNav
                    className={classes.nav}
                    pages={pages}
                />
            </AppBar>
        </div>
    );
}