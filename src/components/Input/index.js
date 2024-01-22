import React from 'react'

function Input (props) {

  const {onChange} = props
  return (
    <input type="text" placeholder={props.placeholder} onChange= {onChange} />
  )
}

export default Input