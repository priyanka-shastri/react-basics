import React, {useState}from 'react'


const Segment = (props) => {
  // component can return only one node. 2 same heirarchy me div honge to 2 nodes return hoga hence wrap all in 1 div
  
  // const [text, setText] = useState ("pri")

  // function onDisplay (event) { // event argument send by browser on happening of any event and here in our case event is change. event is an object// evrent ki jagh koi aur name bhi de sakte the but thsat need to be same in line 7.
   
   
  //   console.log (event.target.value)
  //   setText (event.target.value)// settext () is used to update text value, which is by default pri
  // }

  const {onDisplay,text} = props

  return (
    <div>
      <div>hello</div>
      <input type = 'text' onChange= {onDisplay}/>
      <div>
        {text}
      </div>
    </div>
    
  )
}

export default Segment