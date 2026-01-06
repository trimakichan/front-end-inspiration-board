import Board from './Board';
import PropTypes from 'prop-types';
import './BoardList.css';

const BoardList = ({ boards, onUpdateSelectedBoard }) => {
  const boardComponents = boards.map((board) => {
    return (
      <li className='board-list__item'  key={board.id}>
      <Board
        id={board.id}
        name={board.name}
        onUpdateSelectedBoard={onUpdateSelectedBoard}
      />
    </li>
    )

  })

  return (
    <section className='board-list'>
      <h1 className='board-list__title'>Board List</h1>
      <ul className='board-list__items'>
        {boardComponents}
      </ul>
    </section>

  );
};

BoardList.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    ownerName: PropTypes.string.isRequired,
  })).isRequired,
  onUpdateSelectedBoard: PropTypes.func.isRequired,
};

export default BoardList;

