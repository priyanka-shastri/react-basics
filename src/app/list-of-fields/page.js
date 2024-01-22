"use client" // next js thing, not imp for now

import React, {useState} from  'react'

import Input from '../../components/Input'

import Button from '../../components/Button'




const ListOfFields = () => {
  const [counter, setCounter] = useState(0)
  // const tempArray=[1,2,3,4,5]

  const [textArray, setTextArray] = useState([]) // empty array 

  const addField = () => {
    setCounter (counter + 1)
  }
  
  const onType = (e,i) => {
    console.log(e.target.value,i)
    // setTextArray[i] = {e.target.value}
    const newTextArray = [...textArray]
    // creating new array from original array
    newTextArray[i] = e.target.value 
    setTextArray (newTextArray)
  }

  console.log(counter)

  // const onLoop = () => (
  //   <Input placeholder='Enter now' />
  // )

  // const arrayFromCounter = []
  // for (let i = 0; i < counter; i++) {
  //   arrayFromCounter.push("this value does not matter")
  // }
  
  const arrayOfInputs = []
  for (let i = 0; i < counter; i++) {
    arrayOfInputs.push(<div key={i}>
      <Input placeholder='Enter now' onChange ={e => onType(e,i)}/>
    </div>)
  }
  console.log("arrayOfInputs", arrayOfInputs)

   return (
    <div>
      <Button onClick={addField} ctaText="Add Field" />

      Number of input fields to be shown: {counter}

      <div>
        {/* {arrayFromCounter.map(onLoop)} */}
        {arrayOfInputs}
      </div>
      {textArray.join(" ")}
    </div>
   )
}

export default ListOfFields

const dummyFunc1 = () => {
  return 5
}
const dummyFunc2 = () => (5) // can be done like this also, () is optional around 5.