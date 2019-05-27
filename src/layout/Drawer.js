import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import classNames from 'class-names';
import {withStyles} from '@material-ui/core/styles';
import {Drawer, Divider, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import {
  Home as HomeIcon, Book as BookIcon, Info as InfoIcon, Edit as EditIcon
} from '@material-ui/icons';

const nav = [
  {
    title: 'Home',
    link: '/',
    icon: <HomeIcon/>
  }, {
    title: 'Create Lesson',
    link: '/editor/create',
    icon: <BookIcon/>
  }, {
    title: 'About',
    link: '#',
    icon: <InfoIcon/>
  }, {
    title: 'Editor',
    link: '#',
    icon: <EditIcon/>
  },
];

class DrawerMenu extends React.Component {
  render() {
    const {classes, layout} = this.props;
    const {openDrawer} = layout;

    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classNames(classes.drawerPaper, !openDrawer && classes.drawerPaperClose),
        }}
        open={openDrawer}>
        <div
          tabIndex={0}
          role="button"
          onClick={() => {}/*this.toggleDrawer('left', false)*/}
        >
          <div className={classes.toolbarIcon}>
            <Link to="/">
              <img src="/images/logo.png" className={classes.toolbarIconImg} alt=""/>
            </Link>
          </div>
          <Divider/>
          <div className={classes.root}>
            <List component="nav">
              {nav.map((item, index) => {
                return (
                  <Link key={index} to={item.link} className={classes.link}>
                    <ListItem button>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText className={classes.title} primary={item.title} />
                    </ListItem>
                  </Link>
                );
              })}
            </List>
          </div>
        </div>
      </Drawer>
    );
  }
}

const styles = theme => ({
  drawerPaper: {
    boxShadow: '0 2px 29px rgba(42, 126, 251, 0.12)',
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 240,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbarIcon: {
    boxShadow: '0 2px 29px rgba(42, 126, 251, 0.12)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  toolbarIconImg: {
    width: 155
  },
  link: {
    textDecoration: 'none'
  },
  title: {
    '& span': {
      fontSize: 17
    }
  }
});

DrawerMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  layout: state.layout
});

export default withStyles(styles)(connect(mapStateToProps)(DrawerMenu));
