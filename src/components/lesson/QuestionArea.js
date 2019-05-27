import React, {Fragment} from 'react';
import {Grid, Typography} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles/index";
import QuestionAnswerList from './QuestionAnswerList';
import QuestionField from './QuestionField';

class QuizArea extends React.Component {
  render() {
    const {classes, questionAnswerList} = this.props;
    return (
      <Grid container justify="center">
        <Grid item xs={12} className={classes.flexCenter}>
          <Typography
            className={classes.primaryText}
            variant="h5"
            gutterBottom
          >Q & A Discussion Area</Typography>
        </Grid>
        <Grid item xs={12}>
          <QuestionAnswerList
            questionAnswerList={questionAnswerList}
          />
        </Grid>
        <QuestionField/>
      </Grid>
    );
  }
}

const styles = theme => ({
  primaryText: theme.primaryText,
  flexCenter: {
    display: 'flex',
    justifyContent: 'center'
  }
});

export default withStyles(styles)(QuizArea);
