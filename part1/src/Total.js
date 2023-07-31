import React from 'react'

function Total(props) {  //props.parts = [{}]

    const total = props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises

  return (
    <div>Total de ejercicios {total}</div>
  )
}

export default Total