import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles/index";
import Search from './Search';
import Select from './Select';
import Slider from './Slider';

class SearchForm extends Component {
  state = {
    text: '',
    language: '',
    studentLanguage: '',
    slider: 3
  };

  onChangeText = event => {
    this.setState({ text: event.target.value });
  };

  onChangeLanguage = event => {
    this.setState({ language: event.target.value });
  };

  onChangeSLanguage = event => {
    this.setState({ studentLanguage: event.target.value });
  };

  onChangeSlider = (event, value) => {
    this.setState({ slider: value });
  };

  render() {
    const {text, language, studentLanguage, slider} = this.state;
    const {classes} = this.props;

    return (
      <form className={classes.form} autoComplete="off">
        <Search
          value={text}
          onChange={this.onChangeText}
        />
        <Select
          name="language"
          label="Language"
          value={language}
          onChange={this.onChangeLanguage}
        />
        <Select
          name="student-language"
          label="Student Language"
          value={studentLanguage}
          onChange={this.onChangeSLanguage}
        />
        <Slider
          min={0}
          max={6}
          step={1}
          value={slider}
          onChange={this.onChangeSlider}
        />
      </form>
    );
  }
}

const styles = {
  form: {
    display: 'flex'
  }
};

export default withStyles(styles)(SearchForm);
