import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {IconButton, MenuItem, Menu, Icon, Typography} from '@material-ui/core';

class UserMenu extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    userName: "Johnny Doe"
  };

  handleMenu = event => {
    this.setState({anchorEl: event.currentTarget});
  };

  handleClose = () => {
    this.setState({anchorEl: null});
  };

  render() {
    const {classes} = this.props;
    const {auth, anchorEl, userName} = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.account}>
        {auth && (
          <Fragment>
            <IconButton
              aria-owns={open ? 'menu-appbar' : null}
              aria-haspopup="true"
              onClick={this.handleMenu}
              className={classes.userMenu}
            >
              <img className={classes.userImg} src="/images/user.png" alt="" />
              <Typography className={classes.userName} variant="h5" gutterBottom>{userName}</Typography>
              <Icon>expand_more</Icon>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={this.handleClose}
            >
              <MenuItem><Link to="/profile">Profile</Link></MenuItem>
              <MenuItem><Link to="/account">Account</Link></MenuItem>
              <MenuItem onClick={this.handleClose}>Logout</MenuItem>
            </Menu>
          </Fragment>
        )}
      </div>
    );
  }
}

const styles = {
  account: {
    flexGrow: 1,
    textAlign: 'right'
  },
  userMenu: {
    padding: 0,
    '&:hover, &:focus': {
      backgroundColor: 'transparent'
    }
  },
  userImg: {
    height: 50
  },
  userName: {
    fontSize: 16,
    margin: 10
  }
};

UserMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  connect()(UserMenu)
);
