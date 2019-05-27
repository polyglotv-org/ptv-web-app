import React from 'react';
import {
  ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, Icon
} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles/index";

class QuestionAnswerItem extends React.Component {
  state={
    expanded: false
  };

  openPanel = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  render() {
    const {classes, item} = this.props;
    const {expanded} = this.state;

    return (
      <ExpansionPanel expanded={expanded} onChange={this.openPanel}>
        <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
          <Typography>
            {item.question}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className={classes.answer}>
            {item.answer}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

const styles = theme => ({
  answer: {
    paddingLeft: 20
  }
});

export default withStyles(styles)(QuestionAnswerItem);
