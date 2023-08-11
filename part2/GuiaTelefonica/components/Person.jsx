import React from 'react'

function Person({person, handleRemove}) {
  return (
    <div>
      {person.name} {person.number}
      <button type='' onClick={handleRemove}>remove</button>  
    </div>
  )
}

export default Person