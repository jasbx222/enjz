import React from 'react'

const InputField = ({
    lable,
    type,
    placeholder,
    id

}) => {
  return (
    <div className=' relative bottom-4'>
    <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-100  dark:text-white">
      {lable}
    </label>
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className="input-style  w-[100%] bg-[#506788] hover:bg-gray-300  focus:text-gray-900 h-[40px] rounded text-center"
    />
  </div>
  )
}

export default InputField