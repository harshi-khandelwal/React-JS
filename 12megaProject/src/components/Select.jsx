import React, { useId } from 'react'

function Select({ options = [], label, className = '', ...props }, ref) {
  const id = useId()

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block mb-1 font-medium text-gray-700">
          {label}
        </label>
      )}
      <select
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-300 w-full ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
export default React.forwardRef(Select)