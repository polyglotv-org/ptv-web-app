import React, {Fragment} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton} from '@material-ui/core';
import {deleteExercise, editExercise} from "../../actions/editor";
import {connect} from "react-redux";

const QuizesList = ({classes, quizes, deleteExercise, editExercise}) => {
  return (
    <Fragment>
      <Typography className={classes.primaryText} variant="h5" gutterBottom>List of Quizes</Typography>
      <List dense={false} className={classes.list}>
        {quizes && quizes.map((quiz, index) => {
          return (
            <ListItem className={classes.listItem} key={index}>
              <ListItemText primary={`${quiz.name} Start - ${quiz.start} End - ${quiz.end}`}/>
              <ListItemSecondaryAction className={classes.actions}>
                <IconButton className={`${classes.icon} ${classes.edit}`} aria-label="Edit" onClick={() => editExercise(quiz.id)}>
                  <img src="/images/edit.png" className={classes.iconImg} alt=""/>
                </IconButton>
                <IconButton className={`${classes.icon} ${classes.delete}`} aria-label="Delete" onClick={() => deleteExercise(quiz.id)}>
                  <img src="/images/delete.png" className={classes.iconImg} alt=""/>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </Fragment>
  );
};

const styles = theme => ({
  list: {
    padding: 0
  },
  listItem: {
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 29px rgba(42, 126, 251, 0.12)',
    marginBottom: 10,
    padding: '17px 200px 17px 34px'
  },
  actions: {
    right: 34
  },
  icon: {
    marginLeft: 13,
    height: 40,
    width: 40
  },
  edit: {
    backgroundImage: 'linear-gradient(to top, #3389ff 0%, #51abff 100%)',
    boxShadow: '0 2px 18px rgba(73, 161, 255, 0.3)'
  },
  delete: {
    backgroundColor: '#e21b1b',
    boxShadow: '0 2px 12px rgba(226, 27, 27, 0.19)',
    '&:hover': {
      backgroundColor: '#e21b1b'
    }
  },
  primaryText: theme.primaryText,
  iconImg: {
    height: 15
  }
});

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => {
  return {
    deleteExercise: id => dispatch(deleteExercise(id)),
    editExercise: id => dispatch(editExercise(id)),
  };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(QuizesList));
