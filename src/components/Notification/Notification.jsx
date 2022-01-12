import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <p>{message}</p>;
};

PropTypes.Notification = {
  message: PropTypes.string,
};
