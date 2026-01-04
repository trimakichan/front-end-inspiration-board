import { useState } from 'react';
import './App.css';
import CardList from './components/CardList';
import Header from './components/Header';
import NewCardForm from './components/NewCardForm';
import NewBoardForm from './components/NewBoardForm';
import { SAMPLE_DATA } from './data/sample_data';


const FORM_TYPES = {
  BOARD: 'boardForm',
  CARD: 'cardForm',
};

const formVisibility = {
  boardForm: true,
  cardForm: true
};


function App() {
  const [showForms, setShowForms] = useState(formVisibility);
  const [boardData, setBoardData] = useState(SAMPLE_DATA)
  const [selectedBoard, setSelectedBoard] = useState(SAMPLE_DATA[0])
  const hideAllForms = !showForms.boardForm && !showForms.cardForm;

  const toggleShowForm = (formType) => {
    setShowForms(prev => ({
      ...prev,
      [formType]: !prev[formType]
    }));
  }

  return (
    <>
      <Header />
      <div className='layout'>
        {/* Place Board component below */}
        <aside className='sidebar'>Insert Board component</aside>
        <main className="main"><CardList selectedBoardData={selectedBoard} /></main>

        <aside className={`forms-panel ${hideAllForms ? 'forms-panel--selector' : 'forms-panel--expanded'}`}>
          {showForms.boardForm ? (
            <NewBoardForm onHideForm={toggleShowForm} formType={FORM_TYPES.BOARD} />)
            :
            <button className='form-btn' onClick={() => toggleShowForm(FORM_TYPES.BOARD)}>Board Form</button>
          }
          {showForms.cardForm ?
            (<NewCardForm onHideForm={toggleShowForm} formType={FORM_TYPES.CARD} selectedBoardData={selectedBoard} />)
            : <button className='form-btn' onClick={() => toggleShowForm(FORM_TYPES.CARD)}>Card Form</button>

          }
        </aside>
      </div>
    </>
  )
}

export default App
