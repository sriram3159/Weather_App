import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axiosInstance from './helpers/axiosInstance'

const Viewer = () => {

    let [data,setData]=useState([])
    let navigate=useNavigate()
    useEffect(()=>
    {
        let fetchdata=async()=>
        {
          let  {data}=await axiosInstance.get("/posts")
            console.log(data);
            setData(data)
        }
        fetchdata()
    },[])
  return (
    <div>
        <Link to='/create'>Create</Link>
        {data.map(x=>
            {
                return (
                    <div>
                <h1>{x.name}</h1>
                <h2>{x.cname}</h2>
                <button onClick={()=>
                {
                    navigate(`update/${x.id}`)
                }}>Updata</button>
                <button onClick={async()=>
                {
                        await axiosInstance.delete(`/posts/${x.id}`)
                        window.location.assign("/")
                }}>Delete</button>
                <br />
                <hr />
                </div>)
    })
            }        
    </div>
  )
}

export default Viewer