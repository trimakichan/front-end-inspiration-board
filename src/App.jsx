import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CardList from './components/CardList';
import Header from './components/Header';
import NewCardForm from './components/NewCardForm';
import NewBoardForm from './components/NewBoardForm';
import { SAMPLE_DATA } from './data/sample_data';
import Board from './components/Board';


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
    console.log('selected board', board)
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
        setBoardData(boardData => {
          return boardData.filter(board => board.id === boardId).cards
            .map(card => card.id === cardId ? likeCard(card) : card)
        });
      });
  };

  const handleBoardSubmit = data => {
    axios.post(`${kbaseURL}/boards`, data)
      .then(result => {
        setBoardData(boardData => {
          // console.log('result data', result.data.board)
          return [result.data.board, ...boardData]
        });
      }).catch(e => console.log(e));
  };

  const handleCardSubmit = (boardId, data) => {
    console.log('board id', boardId, 'data', data)
    axios.post(`${kbaseURL}/boards/${boardId}/cards`, data)
      .then(results => {
        setBoardData(boardData => {
          boardData.map(board => (
            board.id === boardId
              ? { ...board, cards: [...board.cards, results.data] }
              : board
          )
          )
        });
      });
  };


  //   function addCard(boardId, text) {
  //   setBoards(boards.map(board =>
  //     board.id === boardId
  //       ? { ...board, cards: [...board.cards, { id: Date.now(), text }] }
  //       : board
  //   ));
  // }

  // data
  // : 
  // board_id => boardId
  // : 
  // 2
  // id
  // : 
  // 6
  // likes
  // : 
  // 0
  // message
  // : 
  // "message"


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
}

export default Appexport const BoardList = ({ boards, onUpdateSelectedBoard }) => {
  console.log('boards: ', boards);
  const boardComponents = boards.map((board) => {
    return (
      <li className='board-list__item' key={board.id}>
        <Board
          id={board.id}
          name={board.name}
          owner={board.owner}
          onUpdateSelectedBoard={onUpdateSelectedBoard} />
      </li>
    );

  });

  return (
    <section className='board-list'>
      <h1 className='board-list__title'>Board List</h1>
      <ul className='board-list__items'>
        {boards && boardComponents}
      </ul>
    </section>

  );
};

