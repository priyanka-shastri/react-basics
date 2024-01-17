"use client"

import React, { useState } from 'react'

import Input from '../../components/Input'
import Link from '../../components/Link'

const TestPage = () => {
  const [value, setValue] = useState(0) // useState is a function that returns an array, setvalue is also a function
// here setvalue is used as varaible. as fun can also be used as variable. fun ka name is a variable
  function onIncrement () {
    console.log("hh")
    setValue(value + 1) // her fun ko call kiya hai
  }
  
  return <div>
    <h1>Hello world!</h1>
    <h2>Just a subtitle..</h2>
    <Link url="https://www.google.com" text="google me" />

    <Input placeholder="First name" />
    <Input placeholder="Last name" />
    <div>
      <button onClick={onIncrement}>Submit</button>
      <span>{value}</span>
    </div> 
  </div>
}

export default TestPage