import React from 'react'
import Hoc from './Hoc'

const Nav = (props) => {
  return (
    <div>
  {props.data}        
    </div>
  )
}

export default Hoc(Nav)
