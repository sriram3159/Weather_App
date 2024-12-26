import React, { createContext, useState } from 'react'

export const contextApi=createContext()
const ContextProvider = ({children}) => {
    let [count,setCount]=useState(0)
  return (
    <contextApi.Provider value={{setCount,count}}>{children}</contextApi.Provider>
    )
}

export default ContextProvider