import React from 'react'
import styles from './Home.module.css'


const Home = () => {
  return (
    <div>
        <div className={styles.card}>
            <h2>Title</h2>
            <b>
                <h3>
                    Price
                </h3>
            </b>
            <img src='/1.jpg' alt="image" className={styles.image} />
            <br />
            <button className="btn">
                Read more
            </button>

        </div>
      
    </div>
  )
}

export default Home
