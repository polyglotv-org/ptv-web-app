import React from 'react';
import {withStyles} from "@material-ui/core/styles";
import {InputBase} from "@material-ui/core";
import {fade} from '@material-ui/core/styles/colorManipulator';

const Search = ({classes, value, onChange}) => {
  return (
    <div className={classes.search}>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        value={value}
        onChange={onChange}
      />
      <div className={classes.searchIcon}>
        <img src="/images/search.png" className={classes.searchIconImg} alt="" />
      </div>
    </div>
  );
};

const styles = theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    display: 'inline-flex',
    marginRight: 60,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    alignItems: 'center',
    backgroundColor: '#15cd96',
    backgroundImage: 'linear-gradient(to top, #3389ff 0%, #51abff 100%)',
    borderRadius: 18,
    boxShadow: '0 2px 18px rgba(73, 161, 255, 0.3)',
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    pointerEvents: 'none',
    right: 0,
    height: 35,
    width: 35
  },
  searchIconImg: {
    width: 15
  },
  inputRoot: {
    borderRadius: 15,
    boxShadow: '0 2px 29px rgba(42, 126, 251, 0.12)',
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
    transition: theme.transitions.create('width'),
    fontSize: 16,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
});

export default withStyles(styles)(Search);