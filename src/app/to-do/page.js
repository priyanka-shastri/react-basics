'use client'

import React, {useState}from 'react'
import ToDoInput from '../../components/ToDoInput'
import ToDoList from '../../components/ToDoList'
import ToDoDone from '../../components/ToDoList'

const ToDo = () => {

  // const [counter, setCounter] = useState(1)


  // jis value ke update hone se pura code fir se chalega usko setvalue karte hai, yha main datake update hone se ppura logic re run hoga i.e main function hence is array to set value kiya hai
  const [mainData, setMainData] = useState([])

  // data = e.target.todoText.value, used while calling in input
  function catchText (data) {
    console.log(data)
    
    const objects = {
      "id": mainData.length+1,
      "data": data,
      "isDone": false
    }

    const newDummyData = [...mainData]

    newDummyData.push(objects)

    setMainData(newDummyData)

    // mainData.push(objects)

    // setCounter (counter + 1)

  }



  function onCheck () {

    
    if({isDone}=true) {
      // doneListItems = {mainData[counter]}
    }
  }

  // function pendingItem () {
  //   for (let i = 0;i<2;i++) {
      
  //    console.log( 'pending item') 
  //   }

  // }

  // function completedItem () {
  //   for (let i = 0;i<2;i++) {
  //     console.log( 'completed item') 
  //   }

  // }

  const pendingItems = []

  const completedItem = []

  // for (let i = 0; i < mainData.length; i++){
  //   if(mainData[i].isDone === false){
  //     // key is added to make each pushed data unique
  //     pendingItems.push(<div key= {i}> 
  //       {mainData[i].data}
  //     </div>)
  //   }

  // }

  for (let i = 0; i < mainData.length; i++){
    if(mainData[i].isDone === false){
      // key is added to make each pushed data unique

      // since oncheckitem s a fun which will take i as argument to yha khali {oncheckiteem} ni likh sakte also {oncheckiteem(i)} bhi ni kar sakte since ye function call ho jaega yahi. hence is tarah se likhte hai which is called function expression
      pendingItems.push( <ToDoList text ={mainData[i].data} key ={i}  onClick = {() => onCheckItem(i)}/>)
        }
  }
  
  function onCheckItem (i) {

    // duplicate array
    const duplicateArray = [...mainData]

    // get ith element and  update is done
    duplicateArray[i].isDone = true

    // update state
    setMainData(duplicateArray)


  }

  // for(let i=0; i<mainData.length;i++){
  //   if(mainData[i].isDone===true){
  //     completedItem.push(
  //       <div key ={i}>
  //         {/* js expressions ko {} likhenge since html likh rahe hai yha */}
  //         {mainData[i].data}
  //       </div>
  //     )
  //   }
  // }

  for(let i=0; i<mainData.length;i++){
    if(mainData[i].isDone===true){
      completedItem.push(
        < ToDoDone text ={mainData[i].data} key ={i} onClick = {() => CheckAgain(i)} />
      )
    }
  }

  function CheckAgain(i) {

    const newArray = [...mainData]

    newArray[i].isDone= false
    setMainData (newArray)
  }

  //attay call karte time [] ni use karte, jab index dena ho tab he karte hai
  console.log(mainData)

  return(
    <div>
      <ToDoInput placeholder= 'Type to do task here' onSubmit= {catchText}/>

      {/* <ToDoList onclick = {onCheckItem}  /> */}

      {/* <ToDoDone text={doneListItems}/> */}

      <div>
        <h2>Pending Items</h2>

        {pendingItems}
        
      </div>

      <div>
      <h2>Completed Items</h2>
        {completedItem}
      </div>

      
    </div>
  )
}

export default ToDo