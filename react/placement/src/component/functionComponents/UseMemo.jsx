import React, { useMemo, useState } from 'react'
var slowfunction= (Number)=>{
    for(let i=0;i<100000000;i++){}
        return Number*2
}

const UseMemo = () => {
    var [num,setNum]=useState(0);
    var [theme,setTheme]=useState(true);
    var Theme={
        backgroundColor:(theme)?"black":"white",
        color:(theme)?"white":"black"
    }
    let DoublingNumber=()=>useMemo(() => slowfunction(num) , [num])
  return (
    <div>UseMemo
        <input type="number" value={num} onChange={(e)=>{setNum(e.target.value)}}/>
        <button onClick={()=>{setTheme(theme=!theme)}}>toggole</button>
        <h2 style={Theme}>{DoublingNumber()}</h2>
    </div>
  )
}

export default UseMemo