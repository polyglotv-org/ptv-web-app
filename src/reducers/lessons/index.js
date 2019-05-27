import {combineReducers} from 'redux';
import lessons from './lessons';

const homeReducer = combineReducers({
  lessons
});

export default homeReducer;