import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
        <Link to='/mainpage/page1'>Page1</Link>
        <Link to='/mainpage/page2'>Page2</Link>
        <Link to='/mainpage/page3'>Page3</Link>
    </div>
  )
}

export default Sidebar