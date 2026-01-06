import { useState } from 'react';
import './NewBoardForm.css'
import PropTypes from 'prop-types';
import FormCard from './FormCard';
import TextField from './TextField';
import SubmitButton from './SubmitButton';


const kDefaults = {
  name: '',
  owner: '',
};

const BOARD_FIELDS = {
  title: 'Create a New Board',
  fields: [
    {
      name: 'name',
      label: 'Title',
    },
    {
      name: 'owner',
      label: "Owner's Name"
    }
  ]
};

const NewBoardForm = ({onHideForm, formType, onHandleBoardSubmit}) => {
  const [boardFormData, setBoardFormData] = useState(kDefaults);

  const isButtonDisabled = boardFormData.name.trim() === '' || boardFormData.owner.trim() === '';
  const showPreview = boardFormData.name.trim()  || boardFormData.owner.trim();

  const handleSubmit = event => {
    console.log('New Board Submit: ', boardFormData)
    event.preventDefault();
    onHandleBoardSubmit(boardFormData);
    setBoardFormData(kDefaults);
  }

  const handleBoardInputChange = (field) => (e) => {
    setBoardFormData(prev => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  return (
    <FormCard title={BOARD_FIELDS.title} onHideForm={onHideForm} formType={formType} >
      <form onSubmit={handleSubmit} className='new-board-form__form'>
        <div className='new-board-form__input'>
          {BOARD_FIELDS.fields.map((field) => (
            <TextField
              key={field.name}
              label={field.label}
              value={boardFormData[field.name]}
              onChange={handleBoardInputChange(field.name)}
            />
          ))}
        </div>

        {showPreview && (<div>
          {boardFormData.name && (
            <p className='new-board-form__preview'>Title: {boardFormData.name}</p>
          )}
          {boardFormData.owner && (
            <p className='new-board-form__preview'>Owner: {boardFormData.owner}</p>
          )}
        </div>)}

        <SubmitButton isDisabled={isButtonDisabled} />

      </form>
    </FormCard>
  );
};

export default NewBoardForm;
