import css from './Feedback.module.css';
import PropTypes from 'prop-types';


const calcPositiveFeedback = (good, neutral, total) => {
  if (total === 0) {
    return 0;
  }

  return Math.round(((good + neutral) / total) * 100);
};

const Feedback = ({ feedback, totalFeedback }) => {
  const positiveFeedback = calcPositiveFeedback(
    feedback.good,
    feedback.neutral,
    totalFeedback
  );

  return (
    <ul className={css.feedbackList}>
      <li className={css.feedbackItem}>Good: {feedback.good}</li>
      <li className={css.feedbackItem}>Neutral: {feedback.neutral}</li>
      <li className={css.feedbackItem}>Bad: {feedback.bad}</li>
      <li className={css.feedbackItem}>Total: {totalFeedback}</li>
      <li className={css.feedbackItem}>Positive: {positiveFeedback + '%'}</li>
    </ul>
  );
};

Feedback.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  totalFeedback: PropTypes.number.isRequired,
};

export default Feedback;