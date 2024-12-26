import React from 'react'


const Hoc = (WrappedComponent) => {
  return (
    ()=>
    {
      return (
      <WrappedComponent data={"hello"}/>)
    }
    )
}

export default Hoc