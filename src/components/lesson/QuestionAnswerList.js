import React from 'react';
import QuestionAnswerItem from './QuestionAnswerItem'

class QuestionAnswerList extends React.Component {
  render() {
    const {questionAnswerList} = this.props;
    return (
      <div>
        {questionAnswerList.map((questionAnswer, index) => {
          return (
            <QuestionAnswerItem
              key={index}
              item={questionAnswer}
            />
          )
        })}
      </div>
    );
  }
}

export default QuestionAnswerList;
