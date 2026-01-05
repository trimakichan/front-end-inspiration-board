import { useState } from 'react';
import axios from 'axios';
import './App.css';
import CardList from './components/CardList';
import Header from './components/Header';
import NewCardForm from './components/NewCardForm';
import NewBoardForm from './components/NewBoardForm';
import BoardList from './components/BoardList';
import { SAMPLE_DATA } from './data/sample_data';


const kbaseURL = 'http://localhost:5000';

const FORM_TYPES = {
  BOARD: 'boardForm',
  CARD: 'cardForm',
};

const formVisibility = {
  boardForm: true,
  cardForm: true
};

const removeCardAPI = (boardId, cardId) => {
  return axios.delete(`${kbaseURL}/boards/${boardId}/cards/${cardId}`)
    .catch(error => console.log(error));
};

const likeCardAPI = (boardId, cardId) => {
  return axios.patch(`${kbaseURL}/boards/${boardId}/cards/${cardId}`)
    .catch(error => console.log(error));
};


const likeCard = card => {
  return { ...card, countLikes: card.countLikes + 1 };
};


function App() {
  const [showForms, setShowForms] = useState(formVisibility);
  const [boardData, setBoardData] = useState(SAMPLE_DATA)
  const [selectedBoard, setSelectedBoard] = useState()
  const hideAllForms = !showForms.boardForm && !showForms.cardForm;

  const toggleShowForm = (formType) => {
    setShowForms(prev => ({
      ...prev,
      [formType]: !prev[formType]
    }));
  };

  const handleSelectedBoard = (id) => {
    const board = boardData.find(board => board.id === id);
    setSelectedBoard(board)
  };

  const handleRemoveCard = (boardId, cardId) => {
    return removeCardAPI(boardId, cardId)
      .then(() => {
        setBoardData(boardData => {
          return boardData.filter(board => board.id === boardId).cards
            .filter(card => card.id !== cardId);
        });
      });
  };

  const handleLikeCard = (boardId, cardId) => {
    return likeCardAPI(boardId, cardId)
      .then(() => {
        return setBoardData(boardData => {
          return boardData.filter(board => board.id === boardId).cards
            .map(card => card.id === cardId ? likeCard(card) : card)
        });
      });
  };


  return (
    <>
      <Header />
      <div className='layout'>
        <aside className='sidebar'><BoardList boards={boardData} onUpdateSelectedBoard={handleSelectedBoard} /> </aside>
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
