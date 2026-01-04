import './FormCard.css';
import PropTypes from 'prop-types';

const FormCard = ({ title, children }) => {
  return (
    <section className='form-card' aria-label={title}>
      <h2 className='form-card__title'>{title}</h2>
      <div className='form-card__content'>
      {children}
      </div>
    </section>
  );
};

FormCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default FormCard;