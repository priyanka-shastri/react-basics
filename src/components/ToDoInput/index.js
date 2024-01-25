import React from 'react'

const ToDoInput = (props) => {

  const {onSubmit: onSubmitProp, placeholder} = props

  function onSubmit (e) {
    console.log(e.target.todoText.value)
    // stops the  evernt ftom being passed on further
    e.stopPropagation()
    // preventing default behaviuour of the event
    e.preventDefault() 
    
    // calling onSubmit prop, callinh hai that means it os a function
    onSubmitProp(e.target.todoText.value)
  }
  return(
    <form onSubmit= {onSubmit}>
      <input type='text' name ='todoText' placeholder={placeholder}  />
      {/* bydefault submit karne par actual submit hokar url change ho jata hai like http://localhost:3000/to-do?todoText=jjjj */}
    </form>
  )
}

export default ToDoInput