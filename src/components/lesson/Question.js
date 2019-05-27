import React from 'react';
import {withStyles} from "@material-ui/core/styles";
import {FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox} from "@material-ui/core";

const Question = ({classes, question, answers, onChange}) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend" className={classes.legend}>{question}</FormLabel>
      <FormGroup>
        {answers && answers.map((answer, index) => {
          return (
            <FormControlLabel
              key={index}
              control={
                <Checkbox style={{color: '#3389ff'}}/>
              }
              label={answer.label}
              className={classes.controlLabel}
            />
          );
        })}
      </FormGroup>
    </FormControl>
  );
};

const styles = theme => ({
  legend: {
    fontSize: 20,
    color: '#363636',
    lineHeight: '30px',
    marginBottom: 10
  },
  controlLabel: {
    '& span:last-child': {
      color: '#838a8b'
    }
  }
});

export default withStyles(styles)(Question);
