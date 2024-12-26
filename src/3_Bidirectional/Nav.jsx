import React from 'react'

const Nav = (props) => {
  return (
    <div>
        <button onClick={()=>
        {
            props.data()
        }}>Click</button>
    </div>
  )
}

export default Nav