import './Card.css';
import PropTypes from 'prop-types';
import CloseIcon from '../assets/close-outline.svg'

const Card = ({ id, msg, likes }) => {
  return (
    <div className='card'>
      <button className="close-btn">
        <img src={CloseIcon} alt="Close" />
      </button>
      <p>{msg}</p>
      <button className='likes'>{likes} ❤️</button>
    </div>
  );
};


Card.propTypes = {
  id: PropTypes.number.isRequired,
  msg: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired
}

export default Card