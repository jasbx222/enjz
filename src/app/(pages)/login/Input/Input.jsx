const Input = ({
  label,
  id,
  type ,
  placeholder ,
  name
}) => {
  return (
    <div className="mb-5 w-full">
      <label
        htmlFor={id}
        className="block text-sm font-bold mb-2 text-right text-gray-700"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full px-4 text-left py-2 h-11 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800 placeholder:text-gray-400 text-sm"
      />
    </div>
  )
}

export default Input
