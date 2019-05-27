import React from 'react';
import ReactPlayer from 'react-player';
import Button from 'material-ui/Button';
import {play, stop, pause, toggle} from '../../actions/player/player_actions';
import {connect} from 'react-redux';

class HdisPlayer extends React.Component {
  clickPlay = (event) => {
    play();
  };

  togglePlay = (event) => {
    this.props.toggle();
    //console.log(this.props)
  };

  getPlayButtonText = () => {
    return this.props.player.playing ? "Pause" : "Play";
  };

  render() {
    return (
      <div>
        <ReactPlayer playing={this.props.player.playing} url="https://www.youtube.com/watch?v=ysz5S6PUM-U"/>
        <Button onClick={this.togglePlay} variant="raised" color="primary">{this.getPlayButtonText()} </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  player: state.shared.player
});

const mapDispatchToProps = (dispatch) => {
  return {
    play: () => dispatch(play()),
    stop: () => dispatch(stop()),
    pause: () => dispatch(pause()),
    toggle: () => dispatch(toggle())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HdisPlayer);
