"use client"

import React, {useState} from 'react'
import StudentNameInput from '../../components/StudentNameInput'
import StudentNameButton from '../../components/StudentNameButton'

const studentName = () => {
  const [text, setText] = useState()
  const [inputArray, setinputArray] = useState([])

  function onChange (e) {
      setText(e.target.value)
  }

  const onClickFunction = (e) => {
    const newInputArray = [...inputArray]
    newInputArray.push(text)
    setinputArray(newInputArray)
    console.log (newInputArray) 
  }

  return (
    <div>
      {/* can  also be written as onChange = { (e) => onChange(e)} */}
      <StudentNameInput placeholder = "Enter student's name" onChange={onChange} />
      <StudentNameButton onClickFunction = { onClickFunction} />
    </div>
  )
}

export default studentName