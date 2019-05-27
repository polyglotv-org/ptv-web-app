import React from 'react';
import withRoot from '../withRoot';
import CreateEdit from './CreateEdit';
import {connect} from 'react-redux';
import {getLessonById, getExercise} from '../../actions/editor';

class Edit extends React.Component {
  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.fetchData(id);
  }

  render() {
    return (
      <CreateEdit/>
    );
  }
}

const mapStateToProps = (state) => ({
  exercises: state.editor.editor
});

const mapDispatchToProps = dispatch => {
  return {
    fetchData: id => {
      dispatch(getLessonById(id));
      dispatch(getExercise(id));
    }
  };
};

export default withRoot(
  connect(mapStateToProps, mapDispatchToProps)(Edit)
);
