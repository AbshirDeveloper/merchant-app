import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { createStyles, useTheme, withStyles } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';
import { connect } from 'react-redux'

import { Sidebar, Topbar, Footer } from './components';

const useStyles = createStyles({
  root: {
    paddingTop: 56,
    height: '100%',
    '& header': {
      backgroundColor: '#6c82ff'
    }
  },
  shiftContent: {
    paddingLeft: 240
  },
  content: {
    height: '100%'
  }
});

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleSidebarOpen = () => {
    if (this.props.openSidebar) {
      this.props.handleCloseSideBar()
    } else {
      this.props.handleOpenSideBar()
    }
  };

  render() {
    const { classes, children } = this.props;
    return (
      <div
        className={clsx({
          [classes.root]: true,
          [classes.shiftContent]: this.props.isDesktop
        })}>
        <Topbar onSidebarOpen={this.handleSidebarOpen} />
        <Sidebar
          onClose={this.handleSidebarOpen}
          open={this.props.openSidebar}
          variant={this.props.isDesktop ? 'persistent' : 'temporary'}
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

const mapStateToProps = (state) => {
  return {
    openSidebar: state.main.menu,
    isDesktop: state.main.isDesktop
  }
};

export default withStyles(useStyles)(connect(mapStateToProps, {
  handleOpenSideBar: () => {
    return {
      type: 'menu',
      payload: true
    }
  },
  handleCloseSideBar: () => {
    return {
      type: 'menu',
      payload: false
    }
  }
})(Main));
