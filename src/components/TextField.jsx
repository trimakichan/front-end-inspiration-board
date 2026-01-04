import './TextField.css';
import PropTypes from 'prop-types';

const TextField = ({
  label,
  value,
  onChange,
  inputType = 'input'
}) => {
  // Ex. Title -> input-title
  const id = `input-${label.toLowerCase().replace(/\s+/g, '-')}`
  const placeholderValue = `Please enter ${label.toLowerCase()}`

  const commonProps = {
    id,
    value,
    onChange,
    placeholder: placeholderValue,
    className: 'field__input'
  }


  return (
    <div className='field'>
      <label htmlFor={id} className='field__label'>{label}:</label>
      {inputType === 'textarea' ?
        (<textarea
          {...commonProps}
        />) :
        (<input
          type='text'
          {...commonProps}
        />)

      }
    </div>
  );
};

TextField.PropTypes


export default TextField;