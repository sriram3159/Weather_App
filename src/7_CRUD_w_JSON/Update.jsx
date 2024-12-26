import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from './helpers/axiosInstance'

const Update = () => {
    let [name,setName]=useState("")
    let [cname,setCname]=useState("")
    let payload={name,cname}
    let {id}=useParams()
    useEffect(()=>
    {
        let fetchdata=async()=>
        {
            let {data}=await axiosInstance.get(`/posts/${id}`)
            setName(data.name)
            setCname(data.cname)
        }
        fetchdata()
    },[id])
  return (
    <div>
        <form>
            <input type="text" placeholder='name' value={name} onChange={(e)=>
            {
                    setName(e.target.value)
            }}/>
            <input type="text" placeholder='course name' value={cname} onChange={(e)=>
            {
                    setCname(e.target.value)
            }}/>
            <button onClick={async()=>
            {
                let data=await axiosInstance.post("/posts",payload)
                console.log(data);
                window.location.assign("/")
            }}>Update</button>
        </form>
    </div>
  )
}

export default Update