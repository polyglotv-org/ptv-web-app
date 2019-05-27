import {combineReducers} from 'redux';
import {reducer as formRrReducer} from 'redux-form';
import layout from './reducers/layout';
import editor from './reducers/editor/index';
import lessons from './reducers/lessons/index';
import lesson from './reducers/lesson/index';

const rootReducer = combineReducers({
  form: formRrReducer,
  layout,
  editor,
  lessons,
  lesson
});

export default rootReducer;