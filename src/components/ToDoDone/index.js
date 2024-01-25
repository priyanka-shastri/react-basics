import React from 'react'

const ToDoDone = (props) => {

  const {text, onClick} = props
  return(
    <input onClick ={onClick}>{text}</input>
    // <div>{text} </div>
  )
}

export default ToDoDone