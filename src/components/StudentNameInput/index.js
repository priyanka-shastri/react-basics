import React from 'react'

const studentNameInputfunction = (props) => {

  const {placeholder, onChange, value} = props
  return (
    <div>
      <input type = "text"  placeholder={placeholder} onChange = {onChange} value = {value} />
    </div>
  )
}

export default studentNameInputfunction