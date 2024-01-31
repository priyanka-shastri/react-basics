import React from 'react'

const ButtonFunction = (props) => {

  const {onClickFunction}= props
 
  return (
    <div>
      <button onClick= {onClickFunction}>Submit</button>
    </div>
  )
}

export default ButtonFunction