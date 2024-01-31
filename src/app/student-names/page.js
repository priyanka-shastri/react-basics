"use client"

import React, {useState} from 'react'
import StudentNameInput from '../../components/StudentNameInput'
import StudentNameButton from '../../components/StudentNameButton'
import StudentNameTable from '../../components/StudentNameTable'

const StudentName = () => {
  const [text, setText] = useState()
  const [inputArray, setinputArray] = useState([])
  const [tData, settData] = useState([])

  function onChange (e) {
      setText(e.target.value)
  }

  const onClickFunction = (e) => {
    const newInputArray = [...inputArray]
    newInputArray.push(text)
    setinputArray(newInputArray)
    console.log (newInputArray) 
    
    const newTableData = [...tData]
    newTableData.push( 
    // key is given on html element (on outermost html element)or on component when array is going to be printed 
      <tr key = {inputArray.length}>
        <td>
         {newInputArray.length}
        </td>
        <td>
          {text}
        </td>
      </tr>
    )

   
    settData(newTableData)

  }

  return (
    <div>
      {/* can  also be written as onChange = { (e) => onChange(e)} */}
      <StudentNameInput placeholder = "Enter student's name" onChange={onChange} />
      <StudentNameButton onClickFunction = {onClickFunction} />
      <StudentNameTable tableData = {tData}  />
    </div>
  )
}

export default StudentName