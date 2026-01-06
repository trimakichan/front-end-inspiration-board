import PropTypes from 'prop-types';
import './Board.css';

const Board = ({ id, name, onUpdateSelectedBoard }) => {

  return (
    <>
      <div className="board">
        <button onClick={() => onUpdateSelectedBoard(id)} className='board__name'>
          {name} 
        </button>
      </div>
    </>
  );
};

Board.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onUpdateSelectedBoard: PropTypes.func.isRequired,
};

export default Board;