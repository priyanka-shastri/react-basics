import React from 'react'

const ToDoList = (props) => {

  const {text, onClick} = props
  return(
    <div>
      <input type= 'checkbox' onClick={onClick} />{text}
    {/* <div>{listItems} </div> */}
    </div>
    
  )
}

export default ToDoList