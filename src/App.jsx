import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import BoardList from './components/BoardList';
import CardList from './components/CardList';
import NewCardForm from './components/NewCardForm';
import NewBoardForm from './components/NewBoardForm';

const kbaseURL = 'https://back-end-inspiration-board-7juo.onrender.com';

const FORM_TYPES = {
  BOARD: 'boardForm',
  CARD: 'cardForm',
};

const formVisibility = {
  boardForm: true,
  cardForm: true
};

const getAllBoardsAPI = () => {
  return axios.get(`${kbaseURL}/boards`)
    .then(response => response.data)
    .catch(error => console.log(error));
};

const likeCardAPI = (cardId) => {
  return axios.patch(`${kbaseURL}/cards/${cardId}`)
    .catch(error => console.log(error));
};

const likeCard = card => {
  return { ...card, likes: card.likes + 1 };
};

const updateLikedCard = (boardId, cardId, boardData) => (
  boardData?.id === boardId
    ? {
      ...boardData,
      cards: boardData.cards.map(card =>
        card.id === cardId
          ? likeCard(card)
          : card
      )
    }
    : boardData
);


const removeCardAPI = (boardId, cardId) => {
  return axios.delete(`${kbaseURL}/cards/${cardId}`)
    .catch(error => console.log(error));
};

const getUpdatedBoardsAfterRemoval = (boardId, cardId, boardData) => (
  boardData.id === boardId
    ? {
      ...boardData,
      cards: boardData.cards.filter(card => card.id !== cardId)
    }
    : boardData
);


function App() {
  const [showForms, setShowForms] = useState(formVisibility);
  const [boardData, setBoardData] = useState([])
  const [selectedBoard, setSelectedBoard] = useState()
  const hideAllForms = !showForms.boardForm && !showForms.cardForm;

  useEffect(() => {
    getAllBoardsAPI().then(boards => {
      // const newBoards = boards.map(convertFromAPI);
      setBoardData(boards);
    });
  }, []);

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

        setBoardData(prevBoardData =>
          prevBoardData.map(board =>
            getUpdatedBoardsAfterRemoval(boardId, cardId, board)
          )
        );

        setSelectedBoard(prevSelectedBoardData =>
          getUpdatedBoardsAfterRemoval(boardId, cardId, prevSelectedBoardData)
        );

      }).catch(e => console.log(e));;
  };

  const handleLikeCard = (boardId, cardId) => {
    return likeCardAPI(cardId)
      .then(() => {
        setBoardData(prevBoardData =>
          prevBoardData.map(board => updateLikedCard(boardId, cardId, board))
        );

        setSelectedBoard(prevSelectedBoardData =>
          updateLikedCard(boardId, cardId, prevSelectedBoardData)
        );

      }).catch(e => console.log(e));;
  };

  const handleBoardSubmit = data => {
    axios.post(`${kbaseURL}/boards`, data)
      .then(result => {
        setBoardData(boardData => {
          return [result.data.board, ...boardData]
        });
      }).catch(e => console.log(e));
  };

  const handleCardSubmit = (boardId, data) => {
    axios.post(`${kbaseURL}/boards/${boardId}/cards`, data)
      .then(results => {
        const newCard = results.data;
        setBoardData(boardData => (
          boardData.map(board => (
            board.id === boardId
              ? { ...board, cards: [...board.cards, newCard] }
              : board
          )
          )
        ));

        setSelectedBoard(selectedBoardData => (
          selectedBoardData?.id === boardId
            ? { ...selectedBoardData, cards: [...selectedBoardData.cards, newCard] }
            : selectedBoardData
        ));
      });
  };

  return (
    <>
      <Header />
      <div className='layout'>
        <aside className='sidebar'><BoardList boards={boardData} onUpdateSelectedBoard={handleSelectedBoard} /> </aside>
        <main className="main"><CardList selectedBoardData={selectedBoard} onIncreaseLike={handleLikeCard} onRemoveCard={handleRemoveCard} /></main>

        <aside className={`forms-panel ${hideAllForms ? 'forms-panel--selector' : 'forms-panel--expanded'}`}>
          {showForms.boardForm ? (
            <NewBoardForm onHideForm={toggleShowForm} formType={FORM_TYPES.BOARD} onHandleBoardSubmit={handleBoardSubmit} />)
            :
            <button className='form-btn' onClick={() => toggleShowForm(FORM_TYPES.BOARD)}>Board Form</button>
          }
          {showForms.cardForm ?
            (<NewCardForm onHideForm={toggleShowForm} formType={FORM_TYPES.CARD} selectedBoardData={selectedBoard} onHandleCardSubmit={handleCardSubmit} />)
            : <button className='form-btn' onClick={() => toggleShowForm(FORM_TYPES.CARD)}>Card Form</button>

          }
        </aside>
      </div>
    </>
  )
};

export default App;

