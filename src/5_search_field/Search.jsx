import React, { useEffect, useState } from 'react'

const Search = () => {

    let [userdata,setUserdata]=useState([])
    let [search,setSearch]=useState("")
    let [length,setLength]=useState("")

    useEffect(()=>
    {
        window.fetch("https://api.github.com/users").then(x=>x.json()).then(y=>setUserdata(y)).catch(x=>console.log("error"))
    },[])
   let handlelook =(e)=>
   {
    setSearch(e.target.value)
    setLength(search.length)
   }
  return (
    <div>
                <input type="search" onChange={handlelook}/>
               
               {search==null ? "wait" : userdata.map((x,y)=>
                {
                    console.log(x.login.slice(0,search.length+1).toLowerCase());
                    console.log(search.toLowerCase());
                    if(search.toLowerCase()==x.login.slice(0,length+1).toLowerCase()){
                    return(
                        <h2 key={y}>
                            <p >{x.login}</p>
                            <p>{x.avatar_url}</p>
                        </h2>
                    )
                }
                
                })}
                
    </div>
  )
}

export default Search