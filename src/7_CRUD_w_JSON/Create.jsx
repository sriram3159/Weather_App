import React, { useState } from 'react'
import axiosInstance from './helpers/axiosInstance'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    let [name,setName]=useState("")
    let [cname,setCname]=useState("")
    let payload={name,cname}
  return (
    <div>
        <form>
            <input type="text" placeholder='name' onChange={(e)=>
            {
                    setName(e.target.value)
            }}/>
            <input type="text" placeholder='course name' onChange={(e)=>
            {
                    setCname(e.target.value)
            }}/>
            <button onClick={async()=>
            {
                let data=await axiosInstance.post("/posts",payload)
                console.log(data);
                window.location.assign("/")
            }}>Create</button>
        </form>
    </div>
  )
}

export default Create