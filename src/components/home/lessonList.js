import React from 'react';
import GridList from '@material-ui/core/GridList';
import LessonCard from "./lessonCard";

const LessonList = (props) => {
  const {lessons} = props;
  return (
    <GridList spacing={1}>
      {lessons.map((lesson, index) => (
        <LessonCard key={index} lesson={lesson}/>
      ))}
    </GridList>
  );
};

export default LessonList;
