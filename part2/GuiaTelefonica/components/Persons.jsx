import React from 'react'
import Person from './Person'

function Persons({ persons, filterName }) {

  const filterPersons = persons.filter((person) => person.name.toLowerCase().includes(filterName))
  return (
    <>
      {filterPersons.map((person, index) => {
        return <Person key={index} person={person} />
      })}
    </>
  )
}

export default Persons