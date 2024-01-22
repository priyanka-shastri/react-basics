import React from 'react'

const Button = (props) => {
  const {onClick, ctaText} = props 
  // variable, function name - camelcase; component name pascal case
  // jitni bhi dynamic cheeje hai vo yha likh denge
  return (
    <button onClick={onClick}>{ctaText}</button> 
    //  give {} to use variables
    // now jab page.js me jitni baar bhi for diff purpose button ko add karenge these two variables ki value as per requirtement pass ki ja sakti hai
  )
}

export default Button