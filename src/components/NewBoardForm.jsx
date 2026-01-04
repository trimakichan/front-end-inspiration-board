import { useState } from 'react';
import './NewBoardForm.css'
import PropTypes from 'prop-types';
import FormCard from './FormCard';
import TextField from './TextField';
import SubmitButton from './SubmitButton';


const kDefaults = {
  title: '',
  owner: ''
};

const BOARD_FIELDS = {
  title: 'Create a New Board',
  fields: [
    {
      name: 'title',
      label: 'Title',
    },
    {
      name: 'owner',
      label: "Owner's Name"
    }
  ]
};

const NewBoardForm = () => {
  const [boardFormData, setBoardFormData] = useState(kDefaults);

  const isButtonDisabled = boardFormData.title.trim() === '' || boardFormData.owner.trim() === '';

  const handleSubmit = event => {
    event.preventDefault();
    // work on logics here
  }

  const handleBoardInputChange = (field) => (e) => {
    setBoardFormData(prev => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  return (
    <FormCard title={BOARD_FIELDS.title} >
      <form onSubmit={handleSubmit} className='new-board-form__form'>
        <div className='new-board-form__input'>
          {BOARD_FIELDS.fields.map((field)=> (
            <TextField
              key={field.name}
              label={field.label}
              value={boardFormData[field.name]}
              onChange={handleBoardInputChange(field.name)}
            />
          ))}
        </div>

        <SubmitButton isDisabled={isButtonDisabled} />

      </form>
    </FormCard>
  );
};

export default NewBoardForm;
