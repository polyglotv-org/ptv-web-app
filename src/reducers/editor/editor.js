const initialState = {
  lessonObj: {},
  exercises: [],
  newExercise: {
    name: '',
    start: '',
    end: '',
    answers: [{
      label: '',
      checked: false
    }, {
      label: '',
      checked: false
    }, {
      label: '',
      checked: false
    }, {
      label: '',
      checked: false
    }]
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'EDITOR_GET_EXERCISE': {
      return {
        ...state,
        exercises: action.exercises
      };
    }

    case 'EDITOR_GET_EDIT_LESSON_BY_ID': {
      return {
        ...state,
        lessonObj: action.lessonObj
      }
    }

    case 'EDITOR_SAVE_EXERCISE_PENDING': {
      return {...state, fetching: true};
    }

    case 'EDITOR_SAVE_EXERCISE_FULFILLED': {
      return {
        ...state, fetching: false, fetched: true,
        exercises: action.payload.data.exercise_list,
        currentId: action.payload.data.saved_id
      };
    }

    case 'EDITOR_SAVE_EXERCISE_REJECTED': {
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.payload
      };
    }

    case 'EDITOR_SHOW_CREATE_CARD': {
      return {
        ...state,
        isShowCreateExercise: action.isShow,
        newExercise: {
          name: '',
          start: '',
          end: '',
          answers: [{
            label: '',
            checked: false
          }, {
            label: '',
            checked: false
          }, {
            label: '',
            checked: false
          }, {
            label: '',
            checked: false
          }]
        }
      }
    }

    case 'EDITOR_ADD_EXERCISE': {
      const exercises = [...state.exercises];
      action.exercise.id = Math.max(...exercises.map(ex => ex.id)) + 1;
      exercises.push(action.exercise);
      return {
        ...state,
        exercises: exercises
      };
    }

    case 'EDITOR_DELETE_EXERCISE': {
      return {
        ...state,
        exercises: state.exercises.filter(ex => ex.id !== action.id)
      };
    }

    case 'EDITOR_SET_EXERCISE': {
      return {
        ...state,
        newExercise: state.exercises.find(ex => ex.id === action.id)
      };
    }

    case 'EDITOR_CHANGE_FIELD': {
      return {
        ...state,
        newExercise: {
          ...state.newExercise,
          [action.id]: action.value
        }
      };
    }

    case 'EDITOR_CHANGE_EXERCISE': {
      const exercises = state.exercises.filter(ex => ex.id !== action.exercise.id);
      exercises.push(action.exercise);
      return {
        ...state,
        exercises: exercises
      };
    }

    case 'EDITOR_CHANGE_VIDEO': {
      return {
        ...state,
        lessonObj: {
          ...state.lessonObj,
          videoURL: action.src,
          Title: action.title
        }
      };
    }

    case 'EDITOR_CLEAR': {
      return initialState;
    }

    default: {
      return state;
    }
  }
}