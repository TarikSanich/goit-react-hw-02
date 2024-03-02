import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

export default function App() {
  const initialFeedback = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [feedback, setFeedback] = useState(() => {
    const savedfeedbacks = window.localStorage.getItem('feedbacks');
    return savedfeedbacks !== null
      ? JSON.parse(savedfeedbacks)
      : initialFeedback;
  });

  const updateFeedback = feedbackType => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  useEffect(() => {
    window.localStorage.setItem('feedbacks', JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercent = Math.round(
    ((feedback.good + feedback.neutral) / totalFeedback) * 100
  );

  const resetFeedback = () => {
    setFeedback(initialFeedback);
  };

  return (
    <>
      <Description />
      <Options
        option={updateFeedback}
        total={totalFeedback}
        reset={resetFeedback}
      />

      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          value={feedback}
          total={totalFeedback}
          positive={positivePercent}
        />
      )}
    </>
  );
}

