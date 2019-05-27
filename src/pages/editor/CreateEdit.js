import React, {Fragment} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Grid, Button} from '@material-ui/core';
import QuizesList from '../../components/editor/QuizesList';
import EditQuiz from '../../components/editor/EditQuiz';
import CreateNew from '../../components/editor/CreateNew';
import VideoAddPanel from '../../components/editor/VideoAddPanel';
import Video from '../../components/common/Video';
import {connect} from "react-redux";
import {clearState, changeVideo} from "../../actions/editor";

class Preview extends React.Component {
  constructor(props){
    super(props);
  }

  onAddVideo = (videoURL, Title) => {
    this.props.changeVideo({videoURL, Title});
  };

  componentWillUnmount() {
    this.props.clearState();
  }

  render() {
    const {classes, editor} = this.props;
    const {exercises, lessonObj} = editor;

    return (
      <Fragment>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <VideoAddPanel onAddVideo={this.onAddVideo}/>
          </Grid>
          {lessonObj && lessonObj.videoURL &&
            <Fragment>
              <Grid item xs={12} className={classes.marginBottom}>
                <Video src={lessonObj.videoURL} title={lessonObj.Title}/>
              </Grid>
              <Grid item xs={6}>
                <QuizesList quizes={exercises}/>
              </Grid>
              <Grid item xs={6}>
                <EditQuiz/>
              </Grid>
              <Grid item xs={12} className={classes.marginBottom}>
                <CreateNew/>
              </Grid>
              <Grid item xs={12} className={classes.flexCenter}>
                <Button variant="contained" className={`${classes.button} ${classes.primaryBtn}`}>
                  Save
                </Button>
                <Button variant="contained" className={`${classes.button} ${classes.primaryBtn}`} disabled>
                  Publish
                </Button>
              </Grid>
            </Fragment>
          }
        </Grid>
      </Fragment>
    );
  }
}

const styles = theme => ({
  marginBottom: {
    marginBottom: 100
  },
  primaryBtn: theme.primaryBtn,
  flexCenter: {
    display: 'flex',
    justifyContent: 'center'
  },
  video: {
    marginTop: 40,
    width: '100%'
  },
  button: {
    margin: '0 10px'
  }
});

const mapStateToProps = (state) => ({
  editor: state.editor.editor
});

const mapDispatchToProps = dispatch => {
  return {
    clearState: () => dispatch(clearState()),
    changeVideo: (videoURL, Title) => dispatch(changeVideo(videoURL, Title))
  };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Preview));
