import React from 'react'

function Person({person}) {
  return (
    <div>{person.name} {person.number}</div>
  )
}

export default Person