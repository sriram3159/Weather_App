import React, { useContext } from 'react'
import { contextApi } from './ContextProvider'

const Consumer = () => {
    const {setCount,count}=useContext(contextApi)
  return (

    <div>
        <div>{count}</div>
        <button onClick={()=>
    {
        setCount(count+1)
    }}>Click</button></div>
    
    
  )
}

export default Consumer