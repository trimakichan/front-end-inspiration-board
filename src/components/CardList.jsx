import './CardList.css';
import Card from './Card';
import PropTypes from 'prop-types';


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
        <h1><span className='accent'>Cards For </span> {selectedBoardData &&  selectedBoardData.name}</h1>
      </div>
      <div className='card-list__container'>{selectedBoardData ? getCardListJSX() : 'Please Select a Board'}</div>
    </section>



  )
}

// finish this PropTypes later
CardList.propTypes = {

}

export default CardList;
