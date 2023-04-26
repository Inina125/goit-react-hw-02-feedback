import React, { Component } from 'react';
import GlobalStyle from 'components/GlobalStyles';
import { AppCont } from './App.styled';
import Section from './section/Section';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Notification from './notification/Notification';
import Statistics from './statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = event => {
    this.setState(prevState => {
      return {
        [event.target.name]: prevState[event.target.name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.state.good) {
      return (
        Math.round(this.state.good / (this.countTotalFeedback() / 100)) + '%'
      );
    } else {
      return 0;
    }
  };

  render() {
    return (
      <AppCont>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 && (
            <Notification message="There is no feedback" />
          )}
          {this.countTotalFeedback() > 0 && (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
        <GlobalStyle />
      </AppCont>
    );
  }
}

export default App;
