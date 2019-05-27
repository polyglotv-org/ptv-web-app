// import axios from 'axios';
// import {baseUrl} from '../config';
import {data} from './mock';

export const LESSONS_GET_LIST = 'LESSONS_GET_LIST';


// export const getLessons = () => ({
//   type: 'REQUEST_LESSONS',
//   payload: axios.get(baseUrl() + 'lessons')
// });
export const getLessons = () => dispatch => {
  const lessonsList = data.lessons;
  dispatch({type: LESSONS_GET_LIST, lessonsList});
};
