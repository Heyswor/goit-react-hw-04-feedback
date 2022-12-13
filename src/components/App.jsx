import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

import React, { useState } from 'react';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = event => {
    const stateName = event.target.textContent;
    const stateFoo =
      'set' +
      stateName.replace(stateName.charAt(0), stateName.charAt(0).toUpperCase());

    feedbackStatusFun[stateFoo](stateName => stateName + 1);
  };

  const feedbackStatusFun = {
    setGood,
    setNeutral,
    setBad,
  };

  const feedbackStatus = {
    good,
    neutral,
    bad,
  };

  const countTotalFeedback = data => {
    return Object.values(data).reduce((a, b) => a + b, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Number.parseInt((good / countTotalFeedback(feedbackStatus)) * 100);
  };

  const totalFeedback = countTotalFeedback(feedbackStatus);
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage();

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={handleClick}
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
