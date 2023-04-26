import React, { Component } from 'react';
import { Button, ButtonsCont } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  static defaultProps = {
    options: [],
    onLeaveFeedback: null,
  };

  render() {
    return (
      <ButtonsCont>
        {this.props.options.map(name => (
          <Button name={name} key={name} onClick={this.props.onLeaveFeedback}>
            {name}
          </Button>
        ))}
      </ButtonsCont>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
