// імпорт компонент
import React, { useState, useEffect } from 'react';
import { Container } from './App.styled';

import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const [total, setTotal] = useState(0);
 
  const onLeaveFeedback = e => {
    const targetName = e.target.name;
    const newFeedback = {
      ...feedback,
      [targetName]: (feedback[targetName] += 1),
    };
    setFeedback(newFeedback);
  };

  useEffect(() => {
    setTotal(feedback.good + feedback.neutral + feedback.bad);
  }, [feedback.good, feedback.neutral, feedback.bad]);

  const countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = feedback;
    return Math.ceil((good / (good + neutral + bad)) * 100);
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </Container>
  );
};
