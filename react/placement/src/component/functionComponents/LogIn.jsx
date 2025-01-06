import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const LogIn = () => {
    const navigate = useNavigate()
    const [user, setUser]=useState(
        {
            email:'',
            Password:''
        }
    )
    var [Error,setErrorMsg] = useState("")
    var [success,setSuccessMsg] = useState("")
    var handleSubmit= async()=>{
        try{
            await axios.post('https://plac10002.netlify.app/LogIn',user)
            navigate('/')
        }catch(err){
            if(err.response&&err.response.data&&err.response.data.error){
                console.log(err.response.data.error)
            }
            else{ 
                console.log(err)
            }
        }
    }
  return (
    <div>LogIn<br/>
        <label>Email : </label>    
        <input type='email' placeholder='Email' value={user.email} onChange={(e)=>{setUser({...user,email: e.target.value})}}/>
        <br/>
        <label>Password : </label>
        <input type='password' placeholder='Password' value={user.Password} onChange={(e)=>{setUser({...user,Password:e.target.value})}}/>
        <br/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default LogIn