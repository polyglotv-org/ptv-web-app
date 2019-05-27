import React from 'react';
import {withStyles} from "@material-ui/core/styles";
import Slider from '@material-ui/lab/Slider';
import {Grid, Typography} from '@material-ui/core';

const SliderComponent = ({classes, min, max, step, value, onChange}) => {
  return (
    <div className={classes.sliderWrap}>
      <Grid container>
        <Grid item xs={12}>
          <Typography className={classes.level} variant="h5" gutterBottom>Level</Typography>
        </Grid>
        <Grid item xs={12}>
          <Slider
            classes={{
              container: classes.slider,
              trackBefore: classes.trackBefore,
              trackAfter: classes.trackAfter,
              thumb: classes.thumb
            }}
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={onChange}
          />
        </Grid>
      </Grid>
    </div>
  );
};

const styles = {
  sliderWrap: {
    display: 'inline-flex',
    width: 200
  },
  level: {
    margin: 0,
    fontSize: 14
  },
  slider: {
    padding: '5px 0',
  },
  trackBefore: {
    backgroundColor: '#0db39d',
    backgroundImage: 'linear-gradient(to top, #3389ff 0%, #51abff 100%)',
    boxShadow: '0 2px 18px rgba(73, 161, 255, 0.3)',
    height: 3,
  },
  trackAfter: {
    backgroundColor: '#0db39d',
    height: 3
  },
  thumb: {
    backgroundColor: '#f66175',
    backgroundImage: 'linear-gradient(to top, #3389ff 0%, #51abff 100%)',
    boxShadow: '0 2px 18px rgba(73, 161, 255, 0.3)',
    width: 17,
    height: 17
  }
};

export default withStyles(styles)(SliderComponent);
