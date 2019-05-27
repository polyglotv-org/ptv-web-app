import {data} from './mock';

export const LESSON_GET_LESSON_BY_ID = 'LESSON_GET_LESSON_BY_ID';
export const LESSON_GET_QUESTION_ANSWER_LIST = 'LESSON_GET_QUESTION_ANSWER_LIST';
export const LESSON_SAVE_QUESTION = 'LESSON_SAVE_QUESTION';
export const LESSON_GET_QUIZE = 'LESSON_GET_QUIZE';


export const getLessonById = id => dispatch => {
  const lessonObj = data.lessons.find(les => les.id === +id);
  dispatch({type: LESSON_GET_LESSON_BY_ID, lessonObj});
};

export const getQuestionAnswerList = id => dispatch => {
  const questionAnswerList = data.questionAnswerList;
  dispatch({type: LESSON_GET_QUESTION_ANSWER_LIST, questionAnswerList});
};

export const onSaveQuestion = question => dispatch => {
  dispatch({type: LESSON_SAVE_QUESTION, question});
};

export const getQuize = id => dispatch => {
  const quize = data.quize;
  dispatch({type: LESSON_GET_QUIZE, quize});
};
