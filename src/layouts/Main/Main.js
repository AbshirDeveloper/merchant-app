import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { createStyles, useTheme, withStyles } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';

import { Sidebar, Topbar, Footer } from './components';

const useStyles = createStyles({
  root: {
    paddingTop: 56,
    height: '100%'
    // [theme.breakpoints.up('sm')]: {
    //   paddingTop: 64
    // }
  },
  shiftContent: {
    paddingLeft: 240
  },
  content: {
    height: '100%'
  }
});

// const theme = useTheme();
// const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
//   defaultMatches: true
// });
// const classes = useStyles();

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openSidebar: false,
      isDesktop: false
    };
  }

  handleSidebarOpen = () => {
    this.setState({
      openSidebar: !this.state.openSidebar,
      isDesktop: !this.state.isDesktop
    });
  };

  handleSidebarClose = () => {
    this.setState({
      openSidebar: false
    });
  };

  render() {
    // const isDesktop = true;
    // const shouldOpenSidebar = isDesktop ? true : this.state.openSidebar;
    const { classes, children } = this.props;
    return (
      <div
        className={clsx({
          [classes.root]: true,
          [classes.shiftContent]: this.state.isDesktop
        })}>
        <Topbar onSidebarOpen={this.handleSidebarOpen} />
        <Sidebar
          onClose={this.handleSidebarClose}
          open={this.state.openSidebar}
          variant={this.state.isDesktop ? 'persistent' : 'temporary'}
        />
        <main className={classes.content}>
          {children}
          <Footer />
        </main>
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.node
};

export default withStyles(useStyles)(Main);
