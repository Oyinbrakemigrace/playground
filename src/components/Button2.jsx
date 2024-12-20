import React from 'react'

const Button2 = ({ children, isActive, click }) => {
  return (
    <button onClick={click} className={`px-5 py-1 border rounded-xl ${isActive ? "text-white bg-purple-700" : "border border-black text-black hover:border-purple-700 hover:text-purple-700"}`}>{children}</button>
  )
}

export default Button2