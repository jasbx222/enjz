import React from 'react'

export const Inputs = ({
    label,
    placeholder,
    type,
    name
    
}) => {
  return (
    <div className="relative z-0 w-full mb-5 group">
    <input
      type={type}
      name={name}
      id={name}
      className="block py-2.5  w-[300px] px-0  relative right-2 text-sm h-[40px] text-gray-900 bg-transparent border border-gray-400  appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer rounded-xl"
      placeholder={placeholder}
      
    />
    <label
      htmlFor={name}
      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
    {label}
    </label>
  </div>
  )
}
