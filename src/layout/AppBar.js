import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classNames from 'class-names';
import {withStyles} from '@material-ui/core/styles';
import {toggleMenu} from '../actions/layout';
import {AppBar, Toolbar, IconButton} from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import SearchForm from './SearchForm';
import UserMenu from './UserMenu';

class MenuAppBar extends React.Component {
  state = {};

  render() {
    const {classes, layout, toggleMenu} = this.props;
    const {openDrawer} = layout;

    return (
      <AppBar
        className={classNames(classes.appBar, openDrawer && classes.appBarShift)}
        position="absolute"
      >
        <Toolbar disableGutters={!openDrawer} className={classes.toolbar}>
          <IconButton
            aria-haspopup="true"
            aria-label="Menu"
            color="inherit"
            className={classNames(
              classes.menuButton,
              this.state.open && classes.menuButtonHidden,
            )}
            onClick={toggleMenu}
          >
            <img src="/images/hamburger.png" className={classes.menuButtonImg} alt="" />
          </IconButton>
          <SearchForm/>
          <UserMenu/>
        </Toolbar>
      </AppBar>
    );
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    minHeight: 56,
    height: 56,
    colorPrimary: blue[50],
    colorSecondary: blue[50],
  },
  appBar: {
    background: '#ffffff',
    boxShadow: '0 2px 29px rgba(42, 126, 251, 0.12)',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: 240,
    width: `calc(100% - 240px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: {
    paddingLeft: 0,
  },
  menuButton: {
    boxShadow: '0 2px 18px rgba(73, 161, 255, 0.3)',
    backgroundColor: '#ffffff',
    backgroundImage: 'linear-gradient(to top, #3389ff 0%, #51abff 100%)',
    borderRadius: 0,
    height: 64,
    width: 64,
    marginRight: 20,
  },
  menuButtonHidden: {
    display: 'none',
  },
  menuButtonImg: {
    width: 27
  },
});

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  layout: state.layout
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: () => dispatch(toggleMenu())
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(MenuAppBar)
);
