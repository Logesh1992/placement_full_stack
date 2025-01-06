import axios from 'axios'
import React from 'react'
import {useNavigate} from 'react-router-dom'
const SignUp = () => {
  const navigate = useNavigate()
  const [user, setUser] = React.useState({
    name: '',
    email: '',
    age:'',
    password: ''
  })
  var [ErrorMsg,setErrorMsg]=React.useState("")
  var [successMsg,setSuccessMsg]=React.useState("")
  const handlesubmit=async()=>{
    setErrorMsg("")
    setSuccessMsg("")
    try{
      var response=await axios.post('https://plac10002.netlify.app/signup',user)
      setSuccessMsg(response.data.message)
      navigate('/')
    }catch(err){
      if(err.response&&err.response.data&&err.response.data.error){
        setErrorMsg(err.response.data.error)}
        else{ setErrorMsg("Something went wrong")}
      }
  }
  
  return (
    <div>
      <label>sign_up</label><br></br>
      <label>Name : </label>
      <input type='text' placeholder='Name' value={user.name} onChange={(e) => setUser({...user, name: e.target.value })} />
      <br/>
      <label>Email : </label>
      <input type='email' placeholder='Email' value={user.email} onChange={(e)=>{setUser({...user,email: e.target.value})}}/>
      <br/>
      <label>Age : </label>
      <input type='number' placeholder='Age' value={user.age} onChange={(e)=>{setUser({...user,age:e.target.value})}}/>
      <br/>
      <label>Password : </label>


      <input type='password' placeholder='Password' value={user.password} onChange={(e)=>{setUser({...user,password:e.target.value})}}/>
      <br/>
      <button onClick={handlesubmit}>Submit</button>
      {ErrorMsg && <p style={{ color: 'red' }}>{ErrorMsg}</p>}
      {successMsg && <p style={{ color: 'green'}}>{successMsg}</p>}
    </div>
  )
}
export default SignUp