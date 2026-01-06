import PropTypes from 'prop-types';
import './Board.css';

const Board = ({ id, name, ownerName, onUpdateSelectedBoard }) => {

  return (
    <>
      <div className="board">
        <button onClick={() => onUpdateSelectedBoard(id)} className='board__name'>
          <span>{name}</span>
        </button>
        {/* <h3 className='board__owner'>ownerName: {ownerName}</h3> */}
      </div>
    </>
  );
};

Board.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  ownerName: PropTypes.string.isRequired,
  onUpdateSelectedBoard: PropTypes.func.isRequired,
};

export default Board;