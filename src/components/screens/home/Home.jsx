import React from 'react'
import styles from './Home.module.css'
import {cars} from './cars.data'


const Home = () => {
  return (
    <div className='cars'>
        {cars.map(car => (
            <div key={car.id} className={styles.card}>
                <h2>{car.name}</h2>
                <b>
                    <h3>
                        {car.price}
                    </h3>
                </b>
                <img src='/1.jpg' alt="image" className={styles.image} />
                <br />
                <button className="btn">
                    Read more
                </button>

            </div>
        ) )}
        
      
    </div>
  )
}

export default Home
