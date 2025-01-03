import React, { useState,useEffect } from 'react'
import { useRef } from 'react'
const UseRef = () => {
    var [Text,setText]=useState("")
    var [count,setCount]=useState(0)
    var preRef=useRef("")
    var preRefcount=useRef(0)
    useEffect(()=>{
        preRef.current=Text
        console.log("Previous Render is",preRef.current)
        console.log("Current Render is",Text)
    },[Text])
    useEffect(()=>{
        preRefcount.current=count
        console.log("Previous Render count is",preRefcount.current)
        console.log("Current Render count is",count)

    },[count])
  return (
    <div>
        <h1>This is an example of UseRef Text</h1>
        <input type='text' placeholder='Enter a Text' value={Text} onChange={(e)=>{setText(e.target.value)}}/>
        <h2>Current Render is {Text}</h2>
        <h2>Previous Render is {preRef.current}</h2>
        <h1>Number</h1>
        <h3>Current Render is {count}</h3>
        <h3>Previous Render is {preRefcount.current}</h3>
        <button onClick={()=>{setCount(count+1)}}>increase</button>
        <button onClick={()=>{if(count>0)setCount(count-1)}}>decrease</button>
    </div>
  )
}

export default UseRef