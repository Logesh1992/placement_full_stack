import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../../../assets/useEffect.css'
const UseEffect = () => {
var [Post, setPost]=useState([])

useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/')
   .then(res=>{
        console.log(res.data)
        setPost(res.data)
   })
   .catch(err=>{console.log(err)})
},[])

return(
    <div>
        <h1>Post</h1>
        <h2>Post are: </h2>
        <ul className='tag'>
            {Post.map((post,index)=>(
                <li className="tag_1" key={index}>{post.id}  {post.title}</li>
            ))}
        </ul>
    </div>
)
  
}

export default UseEffect