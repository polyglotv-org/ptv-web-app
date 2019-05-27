import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import withRoot from './withRoot';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

class Account extends React.Component {
  render() {
    return (
      <h1>Account</h1>
    );
  }
}

export default withRoot(withStyles(styles)(Account));