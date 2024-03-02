import css from './App.module.css';
import { useState, useEffect } from 'react';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';
import Description from '../Description/Description';


const initialState = { good: 0, neutral: 0, bad: 0 };

const getInitialFeedback = () => {
  const storedFeedback = window.localStorage.getItem('feedback');
  return storedFeedback !== null ? JSON.parse(storedFeedback) : initialState;
};

const heading = 'Sip Happens Café';
const paragraph =
  'Please leave your feedback on our service by selecting one of the options below.';
const noFeedback = 'No feedback yet';

const App = () => {
  const [feedback, setFeedback] = useState(getInitialFeedback);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const caclTotalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const resetFeedback = () => {
    setFeedback(initialState);
  };

  return (
    <div className={css.container}>
      <Description heading={heading} paragraph={paragraph} />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={caclTotalFeedback}
      />
      {caclTotalFeedback !== 0 ? (
        <Feedback feedback={feedback} totalFeedback={caclTotalFeedback} />
      ) : (
        <Notification notification={noFeedback} />
      )}
    </div>
  );
};

export default App;
