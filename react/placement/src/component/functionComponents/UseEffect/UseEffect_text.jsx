import React, { useEffect, useState } from 'react'
const UseEffect_text = () => {
    const [Text, setText] = useState("")
    useEffect(()=>{
        console.log(Text)

    },[Text])
  return (
    <div>
        <label>Text</label>
        <input type='text' placeholder='Enter a Text' value={Text} onChange={(e)=>{setText(e.target.value)}}/>
        <h1>{Text}</h1>
    </div>
  )
}

export default UseEffect_text