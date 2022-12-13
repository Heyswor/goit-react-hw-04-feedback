import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

import React, { Component } from 'react';

export class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClick = event => {
    const stateName = event.target.textContent;
    this.setState(prevState => {
      return { [stateName]: prevState[stateName] + 1 };
    });
  };

  countTotalFeedback = data => {
    return Object.values(data).reduce((a, b) => a + b, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Number.parseInt(
      (this.state.good / this.countTotalFeedback(this.state)) * 100
    );
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback(this.state);
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handleClick}
            options={['good', 'neutral', 'bad']}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positiveFeedbackPercentage}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </div>
    );
  }
}
