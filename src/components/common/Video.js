import React from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';
import ReactPlayer from 'react-player';
// import VideoThumbnail from 'react-video-thumbnail';
import {withStyles} from "@material-ui/core/styles/index";

class Video extends React.Component {
  state = {
    isPlay: false
  };

  togglePlay = () => {
    this.setState({
      isPlay: !this.state.isPlay
    });
  };

  render() {
    const {classes, src, title} = this.props;
    const {isPlay} = this.state;

    return (
      <Card raised={true} className={classes.card}>
        <CardContent>
          {/*<div className={classes.poster}>*/}
            {/*<img src="/images/video2.png" className={classes.video} alt=""/>*/}
          {/*</div>*/}
          {/*<VideoThumbnail videoUrl="http://www.youtube.com/watch?v=Zgfi7wnGZlE" width="100%" height="100%"/>*/}
          <ReactPlayer
            width="100%"
            height={500}
            url={src}
            playing={isPlay}
          />
          {/*{title &&  <Typography className={classes.title} variant="h5" gutterBottom>{title}</Typography>}*/}
        </CardContent>
      </Card>
    );
  }
}

const styles = {
  card: {
    '& > div': {
      padding: 0,
      '&:last-child': {
        padding: 0
      }
    }
  },
  title: {
    padding: '17px 34px'
  }
};

export default withStyles(styles)(Video);
