import { Options } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  totalPercent,
}) => {
  return (
    <>
      <div>
        <Options>Good: {good}</Options>
        <Options>Neutral: {neutral}</Options>
        <Options>Bad: {bad}</Options>
      </div>
      <div>{totalFeedback > 0 && <p>Total: {totalFeedback}</p>}</div>
      <div>
        {totalFeedback > 0 && <p>Positive feedback: {totalPercent}%</p>}
      </div>
    </>
  );
};

PropTypes.Statistics = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  totalPercent: PropTypes.number.isRequired,
};
