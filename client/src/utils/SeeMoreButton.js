import React from 'react'
import '../styles/main.css'

const SeeMoreButton = (props) => {
  return (
    <button className="h-8 w-8 border mt-2 rounded-full" onClick={props.onClick}>
      <p className="text-gray-600">4</p>
      {/* <svg className="mx-auto my-0" fill="#ccc" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
      </svg> */}
    </button>
  )
}

export default SeeMoreButton;