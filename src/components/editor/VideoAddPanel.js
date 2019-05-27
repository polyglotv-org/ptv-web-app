import React, {Fragment} from 'react';
import {Grid, TextField, Button} from '@material-ui/core';
import {withStyles} from "@material-ui/core/styles/index";

class VideoAddPanel extends React.Component {
  state = {
    videoSrc: '',
    videoTitle: ''
  };

  onChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  render() {
    const {classes, onAddVideo} = this.props;
    const {videoSrc, videoTitle} = this.state;

    return (
      <Fragment>
        <Grid item xs={12}>
          <form className={classes.flexCenter}>
            <TextField
              id="videoSrc"
              label="Enter the video URL"
              className={classes.textField}
              type="text"
              value={videoSrc}
              // mask={[?www.]}
              onChange={this.onChange}
              variant="outlined"
            />
            <TextField
              id="videoTitle"
              label="Enter the video title"
              className={classes.textField}
              type="text"
              value={videoTitle}
              onChange={this.onChange}
              variant="outlined"
            />
          </form>
        </Grid>
        <Grid item xs={12} className={classes.flexCenter}>
          <Button
            variant="contained"
            className={`${classes.button} ${classes.primaryBtn}`}
            onClick={() => onAddVideo(videoSrc, videoTitle)}
          >Save</Button>
        </Grid>
      </Fragment>
    )
  }
}

const styles = theme => ({
  primaryBtn: theme.primaryBtn,
  flexCenter: {
    display: 'flex',
    justifyContent: 'center'
  },
  textField: {
    margin: '0 40px',
    width: '30%',
    [`& fieldset`]: {
      borderRadius: 30,
      boxShadow: '0 2px 29px rgba(42, 126, 251, 0.12)',
      borderColor: '#c1d4e0 !important'
    },
    '& input': {
      fontSize: 18,
    }
  },
  button: {
    margin: 20
  }
});

export default withStyles(styles)(VideoAddPanel);


