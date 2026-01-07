import PropTypes from 'prop-types';
import './Board.css';

const Board = ({ id, name,owner, onUpdateSelectedBoard }) => {

  return (
    <>
      <div className="board">
        <button onClick={() => onUpdateSelectedBoard(id)} className='board__name'>
          {name} 
          {owner}
        </button>
      </div>
    </>
  );
};

Board.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  onUpdateSelectedBoard: PropTypes.func.isRequired,
};

export default Board;