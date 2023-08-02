import React from 'react'

function Part({part}) {

  return (
    <>
        <h3>{part.name} {part.exercises}</h3>
    </>
  )
}

export default Part