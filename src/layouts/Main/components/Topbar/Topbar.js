import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles, createStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import Navigation from '../Navigation'
import './index.css'
const useStyles = createStyles({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: 8
  }
});

class Topbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: []
    };
  }

  render() {
    const { className, onSidebarOpen, classes, ...rest } = this.props;
    return (
      <AppBar {...rest} className={clsx(classes.root, className)}>
        <Toolbar>
          <RouterLink to="/">
            <img style={{ width: '40px' }} alt="Logo" src="/images/logos/803614.jpg" />
          </RouterLink>
          <div className={classes.flexGrow} />
          <Hidden mdDown>
            <IconButton color="inherit">
              <Badge
                badgeContent={this.state.notifications.length}
                color="primary"
                variant="dot">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton className={classes.signOutButton} color="inherit">
              <InputIcon />
            </IconButton>
          </Hidden>
          {/* <Hidden>
            <IconButton color="inherit" onClick={onSidebarOpen}>
              <MenuIcon />
            </IconButton>
          </Hidden> */}
        </Toolbar>
        <div className="nav" style={{
          width: '66%',
          marginLeft: '8%',
          position: 'absolute',
          marginTop: '7px'
        }}>
          <Navigation />
        </div>
      </AppBar>
    );
  }
}

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default withStyles(useStyles)(Topbar);
