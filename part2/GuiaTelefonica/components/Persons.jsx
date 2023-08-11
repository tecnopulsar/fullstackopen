import React from 'react'
import Person from './Person'
import crudServices from '../services/crud'

function Persons({ persons, setPersons, filterName, setErrorMessage, setSuccessMessage}) {

  const filterPersons = persons.filter((person) => person.name.toLowerCase().includes(filterName))

  const handleRemove = (id) => {
    const newPersons = persons.filter((person) => person.id !== id)
    const removeID = crudServices
      .remove(id)
      .then(deletePerson=>{
        setSuccessMessage('Registro de la persona borrado')
        setTimeout(() => setSuccessMessage(null), 3000)
    })
      .catch(error =>{
        setErrorMessage(`the person was already deleted from server`)
        setTimeout(() => setErrorMessage(null), 3000)
    })
  }

  return (
    <>
      {filterPersons.map((person) => {
        const { id } = person
        return <Person key={id} person={person} handleRemove={() => handleRemove(id)} />
      })}
    </>
  )
}

export default Persons