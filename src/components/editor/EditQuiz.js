import React, {Fragment} from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Typography, Card, FormGroup, TextField, FormControlLabel, Checkbox, Button, Grid} from "@material-ui/core";
import {connect} from "react-redux";
import {toggleShowCreateExercise, addExercise, onChange, saveEditExercise} from '../../actions/editor';

class EditQuiz extends React.Component {
  handleAddExercise = () => {
    const {newExercise} = this.props.exercises;
    const {addExercise, toggleShow, saveEditExercise} = this.props;
    if (newExercise.id) {
      saveEditExercise(newExercise);
    } else {
      addExercise(newExercise);
    }
    toggleShow(false);
  };

  onChange = event => {
    this.props.onChange(event.target.id, event.target.value);
  };

  onCheckboxChange = event => {
    const {newExercise} = this.props.exercises;
    const {answers} = newExercise;
    const answer = answers[event.target.id];
    answer.checked = event.target.checked;
    this.props.onChange('answers', answers);
  };

  onChangeAnswer = event => {
    const {newExercise} = this.props.exercises;
    const {answers} = newExercise;
    const answer = answers[event.target.id];
    answer.label = event.target.value;
    this.props.onChange('answers', answers);
  };

  render() {
    const {exercises, classes} = this.props;
    const {isShowCreateExercise, newExercise} = exercises;
    const {name, start, end, answers} = newExercise;

    return (
      <Fragment>
        <Typography className={classes.primaryText} variant="h5" gutterBottom>Create/Edit Quiz</Typography>
        <Card className={classes.card}>
          {isShowCreateExercise && (
            <Fragment>
              <Grid container spacing={24}>
                <Grid item xs={6}>
                  <FormGroup className={classes.formGroup}>
                    <TextField
                      id="start"
                      label="Time Start"
                      value={start}
                      onChange={this.onChange}
                      type="time"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      inputProps={{
                        step: 300, // 5 min
                      }}
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs={6}>
                  <FormGroup className={classes.formGroup}>
                    <TextField
                      id="end"
                      label="Time End"
                      value={end}
                      onChange={this.onChange}
                      type="time"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      inputProps={{
                        step: 300, // 5 min
                      }}
                    />
                  </FormGroup>
                </Grid>
              </Grid>
              <FormGroup className={classes.formGroup}>
                <TextField
                  id="name"
                  label="Question"
                  value={name}
                  onChange={this.onChange}
                />
              </FormGroup>
              {answers.map((answer, index) => {
                return (
                  <FormGroup className={`${classes.formGroup} ${classes.flex}`}>
                    <FormControlLabel
                      key={index}
                      control={
                        <Checkbox
                          style={{color: '#3389ff'}}
                          id={index}
                          className={classes.checkbox}
                          checked={answer.checked}
                          value={answer.checked}
                          onChange={this.onCheckboxChange}
                        />
                      }
                    />
                    <TextField
                      id={index}
                      label={`answer ${index + 1}`}
                      className={classes.controlLabel}
                      value={answer.label}
                      onChange={this.onChangeAnswer}
                    />
                  </FormGroup>
                );
              })}
              <div className={classes.bottom}>
                <Button
                  variant="contained"
                  className={`${classes.button} ${classes.primaryBtn}`}
                  disabled={!start || !end || !name}
                  onClick={this.handleAddExercise}
                >Save</Button>
              </div>
            </Fragment>
          )}
        </Card>
      </Fragment>
    );
  }
}

const styles = theme => ({
  card: {
    padding: 34
  },
  primaryBtn: theme.primaryBtn,
  button: {
    margin: 20
  },
  bottom: {
    textAlign: 'center'
  },
  formGroup: {
    marginBottom: 10
  },
  controlLabel: {
    width: '100%'
  },
  flex: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row'
  },
  checkbox: {
    marginBottom: -14
  },
  primaryText: theme.primaryText
});

const mapStateToProps = (state) => ({
  exercises: state.editor.editor
});

const mapDispatchToProps = dispatch => {
  return {
    addExercise: exercise => dispatch(addExercise(exercise)),
    toggleShow: isShow => dispatch(toggleShowCreateExercise(isShow)),
    onChange: (id, value) => dispatch(onChange(id, value)),
    saveEditExercise: exercise => dispatch(saveEditExercise(exercise)),
  };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(EditQuiz));