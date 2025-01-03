import React from 'react'
import { useState } from 'react'
import '../../../assets/home.css'
import UseMemo from '../UseMemo'
const Home = () => {
    var Sty={
        fontSize: '40px',
        padding: '2px',
        borderRadius: '10px',
        cursor: 'pointer',
        fontFamily: 'Arial',
    }
    var [counter,setCount]=useState(0);
    function increment(){
      setCount(counter+1);
    }
    function decrement(){
      if(counter>0)  
      setCount(counter-1);
    }
  return (
    <header>
    <h1 style={Sty}>hello</h1>
    <h2 id='idfg' >testing {counter}</h2>
    <p class='Box-model'>hiiii</p>
    <button onClick={()=>{setCount(counter+1)}} onMouseOut={()=>{setCount(counter=0)}}>touch me babe</button>
    </header>
  )
}

export default Home