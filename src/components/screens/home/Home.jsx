import React from 'react'
import styles from './Home.module.css'
import {cars} from './cars.data'
import Card from './card/Card'


const Home = () => {
    const filteredCars = React.useMemo(() => cars.filter(car => car.price < 15000), [])
    console.log(filteredCars)
    console.log('render')
  return (
    <div className={styles.cards}>
        {cars.length ? cars.map( car =>  
            <Card key = {car.id} car = {car} />
        ) : <h3>There is Empty!</h3>}
    </div>
  )
}

export default Home
