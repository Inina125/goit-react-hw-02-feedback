import React, { Component } from 'react';
import { Message } from './Notification.styled';
import PropTypes from 'prop-types';

class Notification extends Component {
  static defaultProps = {
    message: '',
  };

  render() {
    return <Message>{this.props.message}</Message>;
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
