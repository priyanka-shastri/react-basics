import React from 'react'

export function Link (props) {
  return (
    <a href={props.url}>{props.text}</a>
  )
}
