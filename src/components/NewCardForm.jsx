import { useState } from 'react';
import './NewCardForm.css'
import PropTypes from 'prop-types';
import FormCard from './FormCard';
import TextField from './TextField';
import SubmitButton from './SubmitButton';


const kDefaults = {
  message: ''
}

const CARD_FIELD = {
  title: 'Create a New Card',
  label: 'Message'
}

const NewCardForm = () => {
  const [cardFormData, setCardFormData] = useState(kDefaults);

  const isButtonDisabled = cardFormData.message.trim() === '';

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
    <FormCard title={CARD_FIELD.title} >
    {/* Update the layout later */}
      <p>For board name</p>
      <form onSubmit={handleSubmit} className='new-card-form__form'>
        <div className='new-card-form__input'>
          <TextField
            label={CARD_FIELD.label}
            value={cardFormData.message}
            onChange={handleMessageChange}
            inputType='textarea'
          />

          {cardFormData.message && <p className='new-card-form__preview'>Preview: {cardFormData.message}</p>}
        </div>

        <SubmitButton isDisabled={isButtonDisabled}/>

      </form>
    </FormCard>
  );
};

//add propsTypes

export default NewCardForm;
