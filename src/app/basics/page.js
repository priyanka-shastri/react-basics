"use client"

import React, { useState } from 'react'

import Input from '../../components/Input'
import { Link } from '../../components/Link'// {} aega depending upon koi export kese hua hai
import Segment from '../../components/Basics/Segment'

const TestPage = () => {
  const [value, setValue] = useState(0) // useState is a function that returns an array, setvalue is also a function
// here setvalue is used as varaible. as fun can also be used as variable. fun ka name is a variable
// creating a local state with value name

  const [text, setText] = useState ("pri") // state defne kiya humne jiska name hai test. by default text ki value hai pri

  function onDisplay (event) { // event argument send by browser on happening of any event and here in our case event is change. event is an object// evrent ki jagh koi aur name bhi de sakte the but thsat need to be same in line 7.
   
   
    console.log (event.target.value)
    setText (event.target.value)// settext () is used to update text value, which is by default pri
  }

  function onIncrement () {
    console.log("hh")
    setValue(value + 1) // her fun ko call kiya hai // here updatng the state 
  }
  // js return ke age ni jata hai hence all login return se phle likhna

  return <div> 
    <h1>Hello world!</h1>
    <h2>Just a subtitle..</h2>
    <Link url="https://www.google.com" text="google me" /> 
    {/* passing 2 props, url and text */}

    <Input placeholder="First name" /> 
    {/* placeholder is prop ka name */}
    <Input placeholder= {"Last name"} /> 
    {/* {} are optional if string is passed */}

    <div>
      <button onClick={onIncrement}>Submit</button>
      <span>{value}</span>
    </div> 

  <Segment onDisplay= {onDisplay}  text= {text} />
  </div>
}

export default TestPage // or can write export in line 8 before const TestPage = () => {