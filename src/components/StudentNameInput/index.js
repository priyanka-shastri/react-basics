import React from 'react'

const studentNameInputfunction = (props) => {

  const {placeholder, onChange} = props
  return (
    <div>
      <input type = "text"  placeholder={placeholder} onChange = {onChange} />
    </div>
  )
}

export default studentNameInputfunction