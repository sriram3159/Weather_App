import React from 'react'
import { Outlet } from 'react-router-dom';

const MainBar = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default MainBar