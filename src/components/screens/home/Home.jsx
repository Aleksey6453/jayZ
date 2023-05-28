import React from 'react'
import styles from './Home.module.css'
import {cards as cardData} from './cards.data'
import Card from './card/Card'
import CreateCardForm from './create-card-form/CreateCardForm'


const Home = () => {
  const [cards, setCards] = React.useState(cardData)
  console.log(cards)

  React.useEffect(() => {
    console.log('Effecte')
  }, [cards])
  
    // const filteredCards = React.useMemo(
    //     () => cardData.filter(car => card.price < 15000), []
    // )
    // console.log(filteredCards)
  return (
    <div>
      <CreateCardForm setCards={setCards}/>
      <div className={styles.cards}>
          {cardData.length ? cardData.map( card =>  
              <Card key = {card.id} card = {card} />
          ) : <h3>There is Empty!</h3>}

      </div>
    </div>
     
     
      
    
    
  )
}

export default Home
