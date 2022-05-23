import React from 'react'
import './Button.css'
const BtnStyles = {
  fontSize: 17,
  backgroundColor: 'orange',
  marginLeft: 5
}

function Button(props) {
  return (

    <button style={BtnStyles} className='Btn'>{props.title}</button>
  )
}

export default Button