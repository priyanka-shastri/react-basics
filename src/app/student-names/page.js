"use client"

import React, {useState} from 'react'
import StudentNameInput from '../../components/StudentNameInput'
import StudentNameButton from '../../components/StudentNameButton'
import StudentNameTable from '../../components/StudentNameTable'

const StudentName = () => {
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

  // passing a function as an argument of map function
  const tableData = inputArray.map(
    (newText, index) => {
      return (
        <tr key ={index}>
          <td>
           {index+1}
          </td>
          <td>
           {newText}
          </td>
        </tr>
      )
    }
  )

  return (
    <div>
      {/* can  also be written as onChange = { (e) => onChange(e)} */}
      <StudentNameInput placeholder = "Enter student's name" onChange={onChange} />
      <StudentNameButton onClickFunction = {onClickFunction} />
      <StudentNameTable tableData = {tableData}  />
    </div>
  )
}

export default StudentName