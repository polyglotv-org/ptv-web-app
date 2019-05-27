const initialState = {
  lessonObj: {},
  quize: {},
  questionAnswerList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LESSON_GET_LESSON_BY_ID': {
      return {
        ...state,
        lessonObj: action.lessonObj
      }
    }

    case 'LESSON_GET_QUESTION_ANSWER_LIST': {
      return {
        ...state,
        questionAnswerList: action.questionAnswerList
      }
    }

    case 'LESSON_SAVE_QUESTION': {
      const questionAnswerList = [...state.questionAnswerList];
      questionAnswerList.push({
        question: action.question
      });
      return {
        ...state,
        questionAnswerList
      };
    }

    case 'LESSON_GET_QUIZE': {
      return {
        ...state,
        quize: action.quize
      }
    }

    default: {
      return state;
    }
  }
}
