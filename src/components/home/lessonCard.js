import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import {Card, CardActionArea, CardMedia, CardContent, Grid, IconButton} from '@material-ui/core';
//import ReactPlayer from 'react-player';
//import VideoThumbnail from 'react-video-thumbnail'; 

const LessonCard = (props) => {
  const {classes, lesson} = props;
  let imageUrl = lesson.videoURL.replace("www", "img");
  imageUrl = imageUrl.replace("watch?v=", "vi/");
  imageUrl = imageUrl + "/hqdefault.jpg";

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Link to={`lesson/${lesson.id}`} className={classes.link}>
          <CardMedia
            className={classes.media}
            image={imageUrl}
            title={lesson.Title}
          />
          <CardContent className={classes.content}>
            <div className={classes.title}>{lesson.Title}</div>
            <Grid container>
              <Grid item xs={7} className={classes.cell}>Vocabulary ({lesson.vocabulary})</Grid>
              <Grid item xs={5} className={classes.cell}>
                <img src="/images/star.png" className={classes.ratingImg} alt=""/>
                <img src="/images/star.png" className={classes.ratingImg} alt=""/>
                <img src="/images/star.png" className={classes.ratingImg} alt=""/>
                <img src="/images/star.png" className={classes.ratingImg} alt=""/>
                <img src="/images/star-half.png" className={classes.ratingImg} alt=""/>{lesson.rating}
              </Grid>
              <Grid item xs={7} className={classes.cell}>Quizes ({lesson.exercises})</Grid>
              <Grid item xs={5} className={classes.cell}>
                <img src="/images/level.png" className={classes.cellImg} alt=""/>Level ({lesson.level})
              </Grid>
              <Grid item xs={7} className={classes.cell}>Q & A ({lesson.qa})</Grid>
            </Grid>
          </CardContent>
        </Link>
        {lesson.isMyVideo && (
          <Link to={`editor/edit/${lesson.id}`}>
            <IconButton className={`${classes.icon} ${classes.edit}`} aria-label="Edit">
              <img src="/images/edit.png" className={classes.iconImg} alt=""/>
            </IconButton>
          </Link>
        )}
      </CardActionArea>
    </Card>
  );
};

const styles = {
  edit: {
    padding: 5,
    height: 40,
    width: 40,
    backgroundImage: 'linear-gradient(to top, #3389ff 0%, #51abff 100%)',
    boxShadow: '0 2px 18px rgba(73, 161, 255, 0.3)',
    position: 'absolute',
    right: 0,
    top: 0
  },
  iconImg: {
    height: 15
  },
  card: {
    margin: '0 20px 40px 0',
    maxWidth: 345,
    position: 'relative',
    width: 270
  },
  link: {
    textDecoration: 'none',
    '&:focus, &:hover, &:visited, &:link, &:active': {
      textDecoration: 'none'
    }
  },
  editIcon: {
    '-webkitTextFillColor': '#fff'
  },
  media: {
    height: 140,
  },
  title: {
    color: '#ffffff',
    position: 'absolute',
    top: 116,
    fontSize: 18
  },
  content: {
    padding: '13px 10px !important'
  },
  cell: {
    color: '#545454',
    fontSize: 14,
    padding: 5
  },
  ratingImg: {
    marginRight: 2,
    width: 10,
  },
  cellImg: {
    marginRight: 5,
    width: 10
  }
};

LessonCard.propTypes = {
  classes: PropTypes.object.isRequired,
  lesson: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(LessonCard);

/*
    <GridListTile>
      <Card raised={true}>
        <CardContent className={classes.content}>
          <Typography variant="headline">{lesson.Title}</Typography>
          <img width={200} height={120} src={imageUrl} alt=""/>
        </CardContent>
      </Card>
    </GridListTile>
  <VideoThumbnail videoUrl={lesson.videoURL} width={250} height={150}/>
  <ReactPlayer controls={false} url={lesson.videoURL} width={250} height={150}/>
*/
