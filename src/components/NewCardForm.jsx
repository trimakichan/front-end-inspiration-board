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

const NewCardForm = ({ onHideForm, formType, selectedBoardData, onHandleCardSubmit }) => {
  const [cardFormData, setCardFormData] = useState(kDefaults);
  const [showMsgError, setShowMsgError] = useState(false)

  const isButtonDisabled = cardFormData.message.trim() === '';

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedBoardData) return;
    const boardId = selectedBoardData.id;
    onHandleCardSubmit(boardId, cardFormData);
    setCardFormData(kDefaults);
  }
  const handleMessageChange = (e) => {
    const { value } = e.target;

    setCardFormData(prev => ({
      ...prev,
      'message': value,
    }));

    setShowMsgError(value.length > 40);
  };

  return (

    <FormCard title={CARD_FIELD.title} onHideForm={onHideForm} formType={formType} selectedBoardData={selectedBoardData}>
      <form onSubmit={handleSubmit} className='new-card-form__form'>
        <div className='new-card-form__input'>
          {showMsgError && 
          (
          <div className='new-card-form__error'>
            <p>
              Message must be under 40 characters 
            </p>
          </div>
        )}

        {!selectedBoardData && (
          <p className='new-card-form__error'>
            Please select a board to add a card.
          </p>
        )} 
          <TextField
            label={CARD_FIELD.label}
            value={cardFormData.message}
            onChange={handleMessageChange}
            inputType='textarea'
          />

          {cardFormData.message && <p className='new-card-form__preview'>Message: {cardFormData.message}</p>}
        </div>

        <SubmitButton isDisabled={isButtonDisabled} />

      </form>
    </FormCard>
  );
};

NewCardForm.propTypes = {
  onHideForm: PropTypes.func.isRequired,
  formType: PropTypes.string.isRequired,
  selectedBoardData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    owner: PropTypes.string,
  }),
  onHandleCardSubmit: PropTypes.func.isRequired,
};

export default NewCardForm;
