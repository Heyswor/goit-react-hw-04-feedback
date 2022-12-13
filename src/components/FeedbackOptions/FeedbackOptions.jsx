import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div>
      <h2 className={css.feedbackTitle}>Please leave feedback</h2>
      <ul className={css.feedbackList}>
        {options.map(elem => (
          <li key={elem} className={css.feedbackItem}>
            <button
              className={css.feedbackBtn}
              type="button"
              onClick={onLeaveFeedback}
            >
              {elem}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
