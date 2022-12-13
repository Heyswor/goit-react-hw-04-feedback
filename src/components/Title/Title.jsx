import PropTypes from 'prop-types';


export const Title = ({ title }) => {
  return <title>{title}</title>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
