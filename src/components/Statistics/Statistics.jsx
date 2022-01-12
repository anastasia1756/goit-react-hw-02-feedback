import { Options } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  total,
  totalPercent,
}) => {
  return (
    <>
      <div>
        <Options>Good: {good}</Options>
        <Options>Neutral: {neutral}</Options>
        <Options>Bad: {bad}</Options>
      </div>
      <div>{totalFeedback > 0 && <p>Total: {total}</p>}</div>
      <div>
        {totalFeedback > 0 && <p>Positive feedback: {totalPercent}%</p>}
      </div>
    </>
  );
};
