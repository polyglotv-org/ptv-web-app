import React, {Fragment} from 'react';
import {Grid, Typography, Card, Button} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles/index";
import Question from './Question';

class QuizArea extends React.Component {
  render() {
    const {classes, quize} = this.props;
    return (
      <Grid container justify="center">
        <Grid item xs={12} className={classes.flexCenter}>
          <Typography
            className={classes.primaryText}
            variant="h5"
            gutterBottom
          >Quiz Area</Typography>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <Question
              question={quize.text}
              answers={quize.answers}
            />
          </Card>
        </Grid>
        <Grid item xs={12} className={classes.skipCont}>
          <Button variant="contained" className={classes.primaryBtn}>Skip</Button>
        </Grid>
      </Grid>
    );
  }
}

const styles = theme => ({
  primaryBtn: theme.primaryBtn,
  primaryText: theme.primaryText,
  flexCenter: {
    display: 'flex',
    justifyContent: 'center'
  },
  skipCont: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 24
  },
  card: {
    padding: 35
  }
});

export default withStyles(styles)(QuizArea);
