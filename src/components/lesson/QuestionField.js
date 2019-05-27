import React, {Fragment} from 'react';
import {Grid, Card, TextField, Button} from '@material-ui/core';
import {withStyles} from "@material-ui/core/styles/index";
import {onSaveQuestion} from "../../actions/lesson";
import {connect} from "react-redux";

class QuestionField extends React.Component {
  state = {
    question: ''
  };

  onChange = event => {
    this.setState({
      question: event.target.value
    })
  };

  handleSaveQuestion = () => {
    const {onSaveQuestion} = this.props;
    const {question} = this.state;
    onSaveQuestion(question);
    this.setState({
      question: ''
    })
  };

  render() {
    const {classes} = this.props;
    const {question} = this.state;

    return (
      <Fragment>
        <Grid item xs={12}>
          <Card className={classes.card}>
            <TextField
              label="Ask a question"
              className={classes.textField}
              value={question}
              onChange={this.onChange}
              type="textarea"
            />
          </Card>
        </Grid>
        <Grid item xs={12} className={classes.flexCenter}>
          <Button
            variant="contained"
            className={classes.primaryBtn}
            onClick={this.handleSaveQuestion}
            disabled={!question}
          >Submit</Button>
        </Grid>
      </Fragment>
    );
  }
}

const styles = theme => ({
  primaryBtn: theme.primaryBtn,
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 24
  },
  card: {
    padding: 24,
    marginTop: 20
  },
  textField: {
    marginTop: 0,
    width: '100%'
  }
});

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onSaveQuestion: question => dispatch(onSaveQuestion(question))
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(QuestionField)
);
