const initialState = {
  lessonsList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LESSONS_GET_LIST': {
      return {
        ...state,
        lessonsList: action.lessonsList
      }
    }

    default: {
      return state;
    }
  }
}
