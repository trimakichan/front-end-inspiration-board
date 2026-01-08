import './CardList.css';
import Card from './Card';
import PropTypes from 'prop-types';
import WelcomeImage from '../assets/work.svg';

const CardList = ({ selectedBoardData, onIncreaseLike, onRemoveCard }) => {
  const getCardListJSX = () => {
    return selectedBoardData.cards.map(card => {
      return <Card
        key={card.id}
        cardId={card.id}
        boardId={selectedBoardData.id} 
        msg={card.message}
        likes={card.likes}
        onIncreaseLike = {onIncreaseLike}
        onRemoveCard={onRemoveCard}
      />
    })
  };

  return (
    <section className='card-list'>
      <div className='card-list__title'>
        <h1>{selectedBoardData ? (
          <>
            <span className='accent'>Cards For </span>
            {selectedBoardData.name}
          </>
        ) :
          'Please select a board!'
        }
        </h1>
      </div>
      <div className='card-list__container'>
        {selectedBoardData ? getCardListJSX()
          :
          (
            <div className='card-list__welcome'>
              <h2 className='card-list__welcome-title'>✨ Welcome to your inspiration board ✨
                <span>Choose a board to start exploring ideas.</span>
              </h2>
              <img src={WelcomeImage} alt='Welcome Image'/>
            </div>
          )}

          {selectedBoardData && selectedBoardData.cards.length === 0 && (
            <p className='card-list__no-cards'>No cards available. Add a new card to get started!</p>
          )}
      </div>
    </section>
  );
}


CardList.propTypes = {
  selectedBoardData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        message: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
  onIncreaseLike: PropTypes.func.isRequired,
  onRemoveCard: PropTypes.func.isRequired,
};

export default CardList;

