import './CardList.css';
import Card from './Card';
import PropTypes from 'prop-types';

const SAMPLE_CARD_DATA = [
  {
    id: 1,
    message: 'Visit the Colosseum',
    countLikes: 2
  },
  {
    id: 2,
    message: 'Eat pizza in Naples',
    countLikes: 5
  },
  {
    id: 3,
    message: 'Take a gondola ride in Venice',
    countLikes: 3
  },
  {
    id: 4,
    message: 'See the Vatican Museums',
    countLikes: 4
  },
  {
    id: 5,
    message: 'Explore art museums in Florence',
    countLikes: 1
  },
  {
    id: 6,
    message: 'Visit the Leaning Tower of Pisa',
    countLikes: 6
  },
  {
    id: 7,
    message: 'Drive along the Amalfi Coast',
    countLikes: 7
  },
  {
    id: 8,
    message: 'Go wine tasting in Tuscany',
    countLikes: 2
  }
];


const CardList = () => {
  const getCardListJSX = () => {
    // update to cards from SAMPLE_CARD_DATA and use card.id for key once API is done.
    return SAMPLE_CARD_DATA.map(card=> {
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
    <div>
        <div >{getCardListJSX()}</div>
    </div>


  )
}

// finish this PropTypes later
CardList.propTypes = {

}

export default CardList;
