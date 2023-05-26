import React from 'react'
import styles from '../Home.module.css'

const Card = ({car}) => {
  return (
    
      <div key = {car.id} className={styles.card}>
            <h2>{car.name}</h2>
            <b>
                <h3>
                    {car.price} $
                </h3>
            </b>
            <img src={car.image} alt="image" className={styles.image} />
            <br />
            <button className="btn">
                Read more
            </button>
        </div>

  )
}

export default Card
