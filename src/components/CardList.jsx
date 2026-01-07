import './CardList.css';
import Card from './Card';
import PropTypes from 'prop-types';
import WelcomeImage from '../assets/work.svg'

const CardList = ({ selectedBoardData, onIncreaseLike, onRemoveCard }) => {

  const getCardListJSX = () => {
    // update to cards from SAMPLE_CARD_DATA and use card.id for key once API is done.
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
  }

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
              <h1 className='card-list__welcome-title'>✨ Welcome to your inspiration board ✨
                <span>Choose a board to start exploring ideas.</span>
              </h1>
              <img src={WelcomeImage} alt='Welcome Image'/>
            </div>
          )}
      </div>
    </section>



  )
}


// finish this PropTypes later
CardList.propTypes = {
  selectedBoardData: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      countLikes: PropTypes.number.isRequired
    })).isRequired,
  })).isRequired,
  onIncreaseLike: PropTypes.func.isRequired,
  onRemoveCard:PropTypes.func.isRequired,
};

export default CardList;

