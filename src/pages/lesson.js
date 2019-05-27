import React, {Fragment} from 'react';
import {withStyles} from '@material-ui/core/styles';
import withRoot from './withRoot';
import {connect} from 'react-redux';
import {Grid} from '@material-ui/core';
import {getLessonById, getQuestionAnswerList, getQuize} from '../actions/lesson';
import Video from '../components/common/Video';
import QuizeArea from '../components/lesson/QuizArea';
import QuestionArea from '../components/lesson/QuestionArea';

class Lesson2 extends React.Component {
  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.fetchData(id);
  }

  render() {
    const {classes, lesson} = this.props;
    const {lessonObj, questionAnswerList, quize} = lesson;

    return (
      <Fragment>
        <Grid container>
          <Grid item xs={12} className={classes.block}>
            <Video src={lessonObj.videoURL}/>
          </Grid>
          <Grid item xs={12} className={classes.block}>
            <QuizeArea
              quize={quize}
            />
          </Grid>
          <Grid item xs={12}>
            <QuestionArea
              questionAnswerList={questionAnswerList}
            />
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

const styles = theme => ({
  block: {
    marginBottom: 100
  },
  primaryText: theme.primaryText,
  flexCenter: {
    display: 'flex',
    justifyContent: 'center'
  }
});

const mapStateToProps = (state) => ({
  lesson: state.lesson.lesson
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: id => {
      dispatch(getLessonById(id));
      dispatch(getQuestionAnswerList(id));
      dispatch(getQuize(id));
    }
  };
};

export default withRoot(withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Lesson2)
));