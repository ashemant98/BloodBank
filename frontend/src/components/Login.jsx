import React, { useState } from 'react'
import InputForm from './inputForm'
import axios from 'axios'
import { toast } from 'react-toastify'

import { useNavigate } from 'react-router-dom'
import store from '../redux/store'
import { userLogin } from '../redux/features/auth/authActions'




const Login = (props) => {

    const navigate = useNavigate();
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
   

     const handleSubmit = async(e)=>{

       
      
       store.dispatch(userLogin({username , password , role:props.role}))

     }



  return (
   
        <div>
       <div className='flex items-center justify-center flex-col '>
        <InputForm  onChange={(e)=>
            setUsername(e.target.value)
        } type="text" placeholder='Username' name="Username"></InputForm>
        <InputForm onChange={(e)=>{
            setPassword(e.target.value)
        }} type="password" placeholder='Password' name="Password"></InputForm>

        

  
        
        <button className='px-4 py-2 m-4 border-2 rounded-lg text-white' onClick={handleSubmit}>Submit</button>
       </div> 

</div>
  )
}

export default Login