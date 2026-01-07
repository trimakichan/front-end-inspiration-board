import PropTypes from 'prop-types';
import './BoardList.css';
import { BoardList } from '../App';

BoardList.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
  })).isRequired,
  onUpdateSelectedBoard: PropTypes.func.isRequired,
};

export default BoardList;

