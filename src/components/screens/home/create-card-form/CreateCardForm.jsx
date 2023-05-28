import React from 'react'
import styles from './CreateCarForm.module.css'

const clearData = {
    price: '',
    name: '',
    image: '',
}


const CreateCardForm = ({setCards}) => {
    const [data, setData] = React.useState(clearData)
   
    const createCard = (e) => {
        e.preventDefault()

        setCards(prev => [
            {id: prev.length + 1, 
            ...data},
            ...prev
        ])

        setData(clearData)
    }
    console.log('were!')
   
    
  return (
    <form className={styles.form}>
      <input className={styles.input} 
            placeholder='name...'
            onChange={e => setData(prev => ({
                ...prev, name: e.target.value
            }))}
            value={data.name} 
            />
      <input className={styles.input} 
            type="text" 
            placeholder='price...' 
            onChange={e => setData(prev => ({
                ...prev, price: e.target.value
            }))}
            value={data.price}/>
      <input className={styles.input} 
            type="text" 
            placeholder='image...' 
            onChange={e => setData(prev => ({
                ...prev, image: e.target.value
            }))}
            value={data.image}/>

      <button onClick={e => createCard(e)} className='btn' type='submit'>Create</button>
    </form>
  )
}

export default CreateCardForm
