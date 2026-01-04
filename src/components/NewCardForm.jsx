import { useState } from 'react';
import './NewCardForm.css'
import PropTypes from 'prop-types';
import FormCard from './FormCard';
import TextField from './TextField';


const kDefaults = {
  message: ''
}

const CARD_INFO = {
  title: 'Create a New Card',
  label: 'Message'
}

const NewCardForm = () => {
  const [cardFormData, setCardFormData] = useState(kDefaults);

  const handleSubmit = event => {
    event.preventDefault();
    // work on logics here
  }

  const handleMessageChange = (e) => {
    setCardFormData(prev => ({
      ...prev,
      message: e.target.value,
    }));
  };

  return (
    <FormCard title={CARD_INFO.title} >
    {/* Update the layout later */}
      <p>For board name</p>
      <form onSubmit={handleSubmit} className='new-card-form__form'>
        <div className='new-card-form__input'>
          <TextField
            label={CARD_INFO.label}
            value={cardFormData.message}
            onChange={handleMessageChange}
            inputType='textarea'
          />

          {cardFormData.message && <p className='new-card-form__preview'>Preview: {cardFormData.message}</p>}
        </div>

        <button type="submit" className='submit-btn'>Submit</button>

      </form>
    </FormCard>
  );
};

export default NewCardForm;
