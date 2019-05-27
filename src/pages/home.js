import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {getLessons} from '../actions/lessons';
import withRoot from './withRoot';
import LessonList from '../components/home/lessonList';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const {lessonsList} = this.props.lessons;
    return (
      <Fragment>
        <LessonList lessons={lessonsList}/>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  lessons: state.lessons.lessons
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(getLessons())
  };
};

export default withRoot(
  connect(mapStateToProps, mapDispatchToProps)(Home)
);
