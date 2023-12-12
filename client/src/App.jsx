import { useEffect, useState } from 'react'
import './App.scss'
import useFetchData from './hooks/useFetchData'

function App() {
  const {data} = useFetchData();
  
  return (
    <div className='cards'>
      {
        data && data.map((item)=>(
          <div key={item.id}>
            <img src={item.image} alt="" />
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <span>{item.price}$</span>
          </div>
        ))
      }
    </div>
  )
}

export default App