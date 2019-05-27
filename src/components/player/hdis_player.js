import React from 'react';
import ReactPlayer from 'react-player';
import Button from 'material-ui/Button';
import {play, stop, pause, toggle, progress} from '../../actions/player/player_actions';
import {connect} from 'react-redux';

export const HdisPlayer = ({player, play, stop, pause, toggle, progress}) => {
  const clickPlay = (event) => {
    play();
  };

  const togglePlay = (event) => {
    toggle();
  };

  const getPlayButtonText = () => {
    return player.playing ? "Pause" : "Play";
  };

  const onPlay = () => {
    play();
  };

  const onPause = () => {
    pause();
  };

  const onProgress = state => {
    console.log('onProgress', state);
    progress(state);
  };

  return (
    <div>
      <ReactPlayer onProgress={onProgress} playing={player.playing} url="https://www.youtube.com/watch?v=ysz5S6PUM-U"/>
      <Button onClick={togglePlay} variant="raised" color="primary">{getPlayButtonText()} </Button>
      <div>played: {player.playedSeconds.toFixed(2)}</div>
      <div>loaded: {player.loadedSeconds.toFixed(2)}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  player: state.shared.player
});

export default connect(mapStateToProps, {play, stop, pause, toggle, progress})(HdisPlayer);
