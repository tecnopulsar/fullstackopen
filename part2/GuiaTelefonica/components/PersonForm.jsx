import React, { useState } from 'react'
import crudServices from '../services/crud'

function PersonForm({ persons, setPersons, setSuccessMessage }) {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setNewName('');
        setNewNumber('');
        // array de person
        let personFinded = persons.filter((item) => (item.name).toLowerCase() === (newName).toLowerCase());
        // Controlar que el nombre ya no este registrado
        if (personFinded.length === 0) {
            const newPerson = {
                name: newName,
                number: newNumber
            }
            crudServices
                .create(newPerson)
                // .then(returnedPerson => setPersons(persons.concat(returnedPerson)))
                .then(createPerson => {
                    setSuccessMessage(`${createPerson.name} registrado`)
                    setTimeout(() => setSuccessMessage(null), 3000)
                })
        } else {
            const confirmChange = confirm(`${newName} ya se encuentra registrado, desea actualizar el numero registrado`)
            if (confirmChange) {
                personFinded[0].number = newNumber
                crudServices
                    .update(personFinded[0].id, personFinded[0])
                    .then(updatePerson => {
                        setSuccessMessage(`${updatePerson.name} actualizado`)
                        setTimeout(() => setSuccessMessage(null), 3000)
                    })
            }

        }
    }
    const handleNameChange = (e) => {
        setNewName(e.target.value)
    }
    const handleNumberChange = (e) => {
        setNewNumber(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    name: <input type='text' value={newName} onChange={handleNameChange} placeholder='Input new name...' />
                </div>
                <div>
                    name: <input type='text' value={newNumber} onChange={handleNumberChange} placeholder='Input tel number...' />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm