import React, { Component } from 'react';
import { Item, StatisticsCont } from './Statistics.styled';
import PropTypes from 'prop-types';

const NAMES = {
  good: 'Good',
  neutral: 'Neutral',
  bad: 'Bad',
  total: 'Total',
  positivePercentage: 'Positive Feedback',
};

class Statistics extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  render() {
    return (
      <StatisticsCont>
        {Object.keys(this.props).map(name => (
          <Item key={name}>
            {NAMES[name]}: {this.props[name]}
          </Item>
        ))}
      </StatisticsCont>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
