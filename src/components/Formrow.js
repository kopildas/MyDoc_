import React from 'react'

const Formrow = ({type, name, value, handleChange , levelText}) => {
  return (
    <div className="mb-4">
          <label
            className="block text-black-700 font-bold mb-2"
            htmlFor="{levelText}"
          >
            {levelText || name}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={name}
            type={type}
            placeholder={name}
            required
            onChange={handleChange}
          />
        </div>
  )
}

export default Formrow
