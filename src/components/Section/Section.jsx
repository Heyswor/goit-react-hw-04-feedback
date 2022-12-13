import { Title } from "components/Title/Title";
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <section>
      <Title title={title} />
      {children}
    </section>
  );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
}
