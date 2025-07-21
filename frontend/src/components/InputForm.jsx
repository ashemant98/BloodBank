import React from 'react'

const InputForm = (props) => {
  return (
    <div className='flex  justify-center items-center gap-2'>
    <label className='text-white text-lg' for={props.name}>{props.name}:</label>
    <input  type={props.type} placeholder={`Enter your ${props.placeholder}`} className='p-2 m-2  rounded-2xl focus:outline-slate-800' onChange={props.onChange} />
  </div>)
}

export default InputForm