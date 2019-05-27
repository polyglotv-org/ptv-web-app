import React, {Fragment} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {toggleShowCreateExercise} from '../../actions/editor';
import {Button, Typography} from '@material-ui/core';
import {connect} from "react-redux";

const CreateNew = ({classes, toggleShow}) => {
  return (
    <Fragment>
      <Typography className={classes.primaryText} variant="h5" gutterBottom>Create New</Typography>
      <Button
        variant="contained"
        className={`${classes.button} ${classes.primaryBtn}`}
        onClick={() => toggleShow(true)}
      >Quiz</Button>
      <Button variant="contained" className={`${classes.button} ${classes.primaryBtn}`} disabled>
        Vocabulary
      </Button>
      <Button variant="contained" className={`${classes.button} ${classes.primaryBtn}`} disabled>
        Match
      </Button>
      <Button variant="contained" className={`${classes.button} ${classes.primaryBtn}`} disabled>
        Identify
      </Button>
    </Fragment>
  );
};

const styles = theme => ({
  primaryBtn: theme.primaryBtn,
  button: {
    margin: '0 10px'
  },
  primaryText: theme.primaryText
});

const mapStateToProps = (state) => ({
  lesson: state.editor.create
});

const mapDispatchToProps = dispatch => {
  return {
    toggleShow: isShow => dispatch(toggleShowCreateExercise(isShow))
  };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(CreateNew));