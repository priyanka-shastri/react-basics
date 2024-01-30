import React from 'react'

const buttonFunction = (props) => {

  const {onClickFunction}= props
 
  return (
    <div>
      <button onClick= {onClickFunction}>Submit</button>
    </div>
  )
}

export default buttonFunction