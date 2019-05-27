import {data} from './mock';

const EDITOR_GET_EXERCISE = 'EDITOR_GET_EXERCISE';
const EDITOR_SHOW_CREATE_CARD = 'EDITOR_SHOW_CREATE_CARD';
const EDITOR_ADD_EXERCISE = 'EDITOR_ADD_EXERCISE';
const EDITOR_DELETE_EXERCISE = 'EDITOR_DELETE_EXERCISE';
const EDITOR_SET_EXERCISE = 'EDITOR_SET_EXERCISE';
const EDITOR_CHANGE_FIELD = 'EDITOR_CHANGE_FIELD';
const EDITOR_CHANGE_EXERCISE = 'EDITOR_CHANGE_EXERCISE';
const EDITOR_CLEAR = 'EDITOR_CLEAR';
const EDITOR_GET_EDIT_LESSON_BY_ID = 'EDITOR_GET_EDIT_LESSON_BY_ID';
const EDITOR_CHANGE_VIDEO = 'EDITOR_CHANGE_VIDEO';


export const getLessonById = id => dispatch => {
  const lessonObj = data.lessons.find(les => les.id === +id);
  dispatch({type: EDITOR_GET_EDIT_LESSON_BY_ID, lessonObj});
};

export const getExercise = id => dispatch => {
  const exercises = data.exercises;
  dispatch({type: EDITOR_GET_EXERCISE, exercises});
};

export const toggleShowCreateExercise = isShow => dispatch => {
  dispatch({type: EDITOR_SHOW_CREATE_CARD, isShow});
};

export const addExercise = exercise => dispatch => {
  dispatch({type: EDITOR_ADD_EXERCISE, exercise});
};

export const saveEditExercise = exercise => dispatch => {
  dispatch({type: EDITOR_CHANGE_EXERCISE, exercise});
};

export const deleteExercise = id => dispatch => {
  dispatch({type: EDITOR_DELETE_EXERCISE, id});
};

export const editExercise = id => dispatch => {
  dispatch(toggleShowCreateExercise(true));
  dispatch({type: EDITOR_SET_EXERCISE, id});
};

export const onChange = (id, value) => dispatch => {
  dispatch({type: EDITOR_CHANGE_FIELD, id, value});
};

export const changeVideo = (src, title) => dispatch => {
  dispatch({type: EDITOR_CHANGE_VIDEO, src, title});
};

export const clearState = () => dispatch => {
  dispatch({type: EDITOR_CLEAR});
};
