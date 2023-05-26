import React from 'react'
import styles from './Home.module.css'
import {cars} from './cars.data'
import Card from './card/Card'


const Home = () => {
  return (
    <div className={styles.cards}>
        {cars.length ? cars.map( car =>  
            <Card key = {car.id} car = {car} />
        ) : <h3>There is Empty!</h3>}
    </div>
  )
}

export default Home
