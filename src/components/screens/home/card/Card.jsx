import React from 'react'
import styles from '../Home.module.css'

const Card = ({card}) => {
  return (
    
      <div key = {card.id} className={styles.card}>
            <h2>{card.name}</h2>
            <b>
                <h3>
                    {card.price} $
                </h3>
            </b>
            <img src={card.image} alt="image" className={styles.image} />
            <br />
            <button className="btn">
                Read more
            </button>
        </div>

  )
}

export default Card
