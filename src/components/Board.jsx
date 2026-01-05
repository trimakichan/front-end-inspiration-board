import PropTypes from 'prop-Types';

const Board = ({id, tile, ownerName}) => {
	const increaseCardLikes = () => {
		onLike(id);
	}
};

return(
	<li className="Board">
		<h2>{title}</h2>
		<h3>ownerName: {ownerName}</h3>	
	</li>
	<button onClick={(event) => increaseCardLikes()}>Like</button>
	);


Board.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  ownerName: PropTypes.string.isRequired,
	onLike: PropTypes.func.isRequired,
};

export default Board;