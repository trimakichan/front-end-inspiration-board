import Board from './Board';
import PropTypes from 'prop-types';
import './BoardList.css';

const BoardList = ({ boards, onUpdateSelectedBoard }) => {
  const boardComponents = boards.map((board) => {
    return (
      <Board
        key={board.id}
        id={board.id}
        name={board.name}
        ownerName={board.ownerName}
        onUpdateSelectedBoard={onUpdateSelectedBoard}
      />
    )

  })

  return (
    <div className='board-list'>
      <h1 className='board-list__title'>Board List</h1>
        {boardComponents}
    </div>

  );
};

BoardList.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    ownerName: PropTypes.string.isRequired,
  })).isRequired,
  onUpdateSelectedBoard: PropTypes.func.isRequired,
};

export default BoardList;

