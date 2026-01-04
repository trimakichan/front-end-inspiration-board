import './FormCard.css';
import PropTypes from 'prop-types';
import Minimize from '../assets/minimize.svg'

const FormCard = ({ title, onHideForm, formType, children }) => {
  return (
    <section className='form-card' aria-label={title}>
      <div className='form-card__title'>
        <h2>{title}</h2>
        <button onClick={() => onHideForm(formType)} className="minimize-btn" aria-label="Minimize" >
          <img src={Minimize} alt="Minimize" />
        </button>
      </div>

      <div className='form-card__content'>
        {children}
      </div>
    </section>
  );
};

FormCard.propTypes = {
  title: PropTypes.string.isRequired,
  onHideForm: PropTypes.func.isRequired,
  formType: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default FormCard;