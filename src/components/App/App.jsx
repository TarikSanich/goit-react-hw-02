// import { useState } from 'react';
// import { useEffect } from 'react';
// import './App.css';
// import Description from '../Description/Description';
// import Options from '../Options/Options';
// import Feedback from '../Feedback/Feedback';
// import Notification from '../Notification/Notification';

// export default function App() {
//   const initialFeedback = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   const [feedback, setFeedback] = useState(() => {
//     const savedfeedbacks = window.localStorage.getItem('feedbacks');
//     return savedfeedbacks !== null
//       ? JSON.parse(savedfeedbacks)
//       : initialFeedback;
//   });

//   const updateFeedback = feedbackType => {
//     setFeedback({
//       ...feedback,
//       [feedbackType]: feedback[feedbackType] + 1,
//     });
//   };

//   useEffect(() => {
//     window.localStorage.setItem('feedbacks', JSON.stringify(feedback));
//   }, [feedback]);

//   const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
//   const positivePercent = Math.round(
//     ((feedback.good + feedback.neutral) / totalFeedback) * 100
//   );

//   const resetFeedback = () => {
//     setFeedback(initialFeedback);
//   };

//   return (
//     <>
//       <Description />
//       <Options
//         option={updateFeedback}
//         total={totalFeedback}
//         reset={resetFeedback}
//       />

//       {totalFeedback === 0 ? (
//         <Notification />
//       ) : (
//         <Feedback
//           value={feedback}
//           total={totalFeedback}
//           positive={positivePercent}
//         />
//       )}
//     </>
//   );
// }


import css from './App.module.css';
import { useState, useEffect } from 'react';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';
import Description from '../Description/Description';

//object стану відгуків за замовченням
const initialState = { good: 0, neutral: 0, bad: 0 };

//ф-ція що зчитує значення localStorage за ключем
const getInitialFeedback = () => {
  const storedFeedback = window.localStorage.getItem('feedback');
  return storedFeedback !== null ? JSON.parse(storedFeedback) : initialState;
};

//значення теккстових компонентів для можливості подальшого перевикористання
const heading = 'Sip Happens Café';
const paragraph =
  'Please leave your feedback on our service by selecting one of the options below.';
const noFeedback = 'No feedback yet';

const App = () => {
  // зміна значення початкового стану
  const [feedback, setFeedback] = useState(getInitialFeedback);

  // хук ф-ція збереження даних у localStorage
  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  //ф-ція зміни стану відгуків
  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  // Загальна кількість відгуків
  const caclTotalFeedback = feedback.good + feedback.neutral + feedback.bad;

  // Функція скидання відгуків
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
