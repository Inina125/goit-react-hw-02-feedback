import React, { Component } from 'react';
import { Heading } from './Section.styled';
import PropTypes from 'prop-types';

class Section extends Component {
  static defaultProps = {
    title: '',
    children: null,
  };

  render() {
    return (
      <>
        <Heading>{this.props.title}</Heading>
        {this.props.children}
      </>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default Section;
