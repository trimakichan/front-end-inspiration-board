import Board from './Board';
import PropTypes from 'prop-types';

const BoardList = ({boards, increaseCardLikes}) => {
  const boardComponents = boards.map((board) => {
    return(
      <Board
        key={board.id}
        id={board.id}
        title={board.title}
        ownerName={board.ownerName}
        increaseCardLikes
        />
      )
  
  })

return (
  <>
    <h1>Board List</h1>
    <ul>
      {boardComponents}
    </ul>
  </>

);
};

BoardList.propTypes= = {
  boards:PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    ownerName: PropTypes.string.isRequired,
  })).isRequired,
  onCardLike: PropTypes.func.isRequired,
};

export default BoardList;

