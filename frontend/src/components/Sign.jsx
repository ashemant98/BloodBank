import React ,{useState} from 'react'
import axios from "axios"

import Login from './Login'
import InputForm from './inputForm'

const Sign = () => {

  const tabs=['Donar' , 'Admin' , 'Hospital' , 'NGO']

  const [isLogin , setIsLogin] = useState(true)
  const[role , setRole]= useState(tabs[0])
  const[username  , setUsername] = useState("")
  const[password, setPassword]=useState("")



  const handleSubmit = async()=>{

    console.log('inside handle submit')
      const result = await axios.post('http://localhost:3000/api/v1/user/signup',{
        username,
        password,
        role
      })
      
      if(result.data.success)
        alert("signup successfull")
      else
        alert("signup failed")
  }





  

  return (

      <div className='flex justify-center items-center w-full flex-col border-2 border-slate-950 bg-slate-600 gap-4'>

        <div className='mt-6'>
          <h1 className='text-white text-2xl'>

            {
              isLogin?<>Login</>:<>Signup</>
            }
          </h1>
        </div>



        {/* Role based selection UI */}
             <div className='mt-5'>

            <ul className='flex text-white  text-md border-2 border-white rounded-3xl  cursor-pointer'>
              {
                tabs.map((e , index)=>{
                  return(
                    <li className={`${role===e?'bg-slate-800 rounded-3xl px-4 py-2':"px-4 py-2"}`} onClick={()=>{
                      setRole(e)
                      
                    }} key={index}>{e}</li>
                  )
                })
              }
            </ul>
            </div>

        {/* Login UI */}
        {
          isLogin&&<Login role={role}></Login>
        }

        {/* signup UI */}

          {(!isLogin)&&
        
          <div>
           
          <div className='flex flex-col justify-center items-center'>
          <InputForm type='text' placeholder='username' name='Username' onChange={(e)=>{
            setUsername(e.target.value)
          }}></InputForm>
          <InputForm type='password' placeholder='password' name='Password' onChange={(e)=>{
            setPassword(e.target.value)
          }}></InputForm>
          {role==='Hospital'&&<InputForm type='text' placeholder='Hospital name' name='Hospital Id' ></InputForm>}
          {role==='NGO'&&<InputForm type='text' placeholder='Ngo Name' name='Ngo Id'></InputForm>}
          <button className='px-4 py-2 m-4 border-2 rounded-lg text-white' onClick={handleSubmit}>Submit</button>
          </div>
          </div>
         
          
          }




        


    
      <div>
       {
       isLogin?<p className='text-white cursor-pointer'>Don"t have an account? <span onClick={()=>{
        setIsLogin((prev)=>!prev)
       }} className='text-green-500 '>signup</span>  </p>:<>
        <p className='text-white cursor-pointer'>Already have an account? <span onClick={()=>{
        setIsLogin((prev)=>!prev)
       }} className='text-green-500'>Login</span>  </p>
       </>}

       </div>





       <div>
        
       </div>



   


    </div>
  

  )
}

export default Sign