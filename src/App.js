import { useState } from 'react';

import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';


export default function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleLeaveFeedback = (e) => {
    const feedback = e.target.value;
    if (feedback === 'good') {
      return setGood(prevState => prevState + 1);
    }
    
    if (feedback === 'neutral') {
      return setNeutral(prevState => prevState + 1);
    }
    
    if (feedback === 'bad') {
      return setBad(prevState => prevState + 1);
    }
  };

  const feedbackOptions = ['good', 'neutral', 'bad'];
  const total = good + neutral + bad;
  const positivePercentage = total ? Math.round(good * 100 / total) : 0;

  return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions feedbackOptions={feedbackOptions} onClick={handleLeaveFeedback} />
        </Section>

        <Section title="Statistics">
          {total !== 0 ? <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage} /> : <Notification message="No feedback given" />}
        </Section>
      </>
    );
  }