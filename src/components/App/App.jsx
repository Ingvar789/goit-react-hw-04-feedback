// імпорт компонент
import React, { useState, useEffect, useRef } from 'react';
import { Container } from './App.styled';

import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

export const App2 = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const { good, neutral, bad } = feedback;
    setTotal(good + neutral + bad);
    console.log(feedback);
  }, [feedback]);

  const onLeaveFeedback = e => {
    const targetName = e.target.name;
    feedback[targetName] += 1;

    setFeedback(feedback);
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

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
        {/* {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : ( */}
        <Statistics
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
        {/* // )} */}
      </Section>
    </Container>
  );
};

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good, neutral, bad } = this.state;
//     return Math.ceil((good / (good + neutral + bad)) * 100);
//   };
//   onLeaveFeedback = e => {
//     const targetName = e.target.name;
//     this.setState(prevState => ({
//       [targetName]: prevState[targetName] + 1,
//     }));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <Container>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>

//         <Section title="Statistics">
//           {this.countTotalFeedback() === 0 ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           )}
//         </Section>
//       </Container>
//     );
//   }
// }
// export default App;
