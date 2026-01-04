import { useState } from 'react';
import './NewBoardForm.css'
import PropTypes from 'prop-types';
import FormCard from './FormCard';
import TextField from './TextField';


const kDefaults = {
  title: '',
  name: ''
}

const TITLE = 'Create a New Board'

const NewBoardForm = () => {
  const [boardFormData, setBoardFormData] = useState(kDefaults);

  const handleSubmit = event => {
    event.preventDefault();
    // work on logics here
  }

  return (
    <FormCard title={TITLE} >
      <form onSubmit={handleSubmit} className='new-board-form__form'>
        <div className='new-board-form__input'>
          <TextField
            label='Title'
            value={boardFormData.message}
            // update here
            onChange={e => setBoardFormData(e.target.value)}
          />
          <TextField
            label="Owner's Name"
            value={boardFormData.message}
             // update here
            onChange={e => setBoardFormData(e.target.value)}
          />
        </div>

        <button type="submit" className='submit-btn'>Submit</button>


      </form>
    </FormCard>
  );
};

export default NewBoardForm;
