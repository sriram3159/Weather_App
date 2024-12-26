// run weather API first then you will get output


import React, { useState } from 'react'
import axiosInstance from './helpers/axiosInstance'

const WeatherApp = () => {
    let [state,setState]=useState("")
    let [fetch,setFetch]=useState({})


  return (
    <div>
        <input type="text" onChange={(e)=>  
        {
            setState(e.target.value)
        }} />
        <button onClick={()=>
        {
            let fetchData=async()=>
            {
                let {data}=await axiosInstance.get(`/weather/${state}`)
                setFetch(data)
                console.log(fetch);
            }
            fetchData()

        }}>check</button>
        <div>{fetch.temp}</div>
        <div>{fetch.condition}</div>
        <div>{fetch.description}</div>
        <div>{fetch.humidity}</div>
    </div>
  )
}

export default WeatherApp