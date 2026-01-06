import './CardList.css';
import Card from './Card';
import PropTypes from 'prop-types';
import WelcomeImage from '../assets/work.svg'


const CardList = ({ selectedBoardData }) => {

  const getCardListJSX = () => {
    // update to cards from SAMPLE_CARD_DATA and use card.id for key once API is done.
    return selectedBoardData.cards.map(card => {
      return <Card
        key={card.id}
        id={card.id}
        msg={card.message}
        likes={card.countLikes}
      // onLikeButton={onLikeButton}
      // onRemoveCard={onRemoveCard}
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
              <img src={WelcomeImage} />
            </div>
          )}
      </div>
    </section>



  )
}

// finish this PropTypes later
CardList.propTypes = {

}

export default CardList;
