import './Card.css';
import PropTypes from 'prop-types';
import CloseIcon from '../assets/close-outline.svg'

const Card = ({ cardId, boardId, msg, likes, onIncreaseLike, onRemoveCard }) => {
  return (
    <div className='card'>
      <button onClick={() => onRemoveCard(boardId, cardId)} className="close-btn" aria-label="Close"> 
        <img src={CloseIcon} alt="Close" />
      </button>
      <p>{msg}</p>
      <button onClick={() => onIncreaseLike(boardId, cardId)} className='likes'>{likes} ❤️ +</button>
    </div>
  );
};

Card.propTypes = {
  cardId: PropTypes.number.isRequired,
  boardId: PropTypes.number.isRequired,
  msg: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  onIncreaseLike: PropTypes.func.isRequired,
  onRemoveCard: PropTypes.func.isRequired,
}

export default Card