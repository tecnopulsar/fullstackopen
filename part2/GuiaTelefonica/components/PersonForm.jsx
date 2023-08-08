import React, { useState } from 'react'

function PersonForm({persons, setPersons}) {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        setNewName('');
        setNewNumber('');


        // Controlar que el nombre ya no este registrado
        if ((persons.filter((item) => (item.name).toLowerCase() === (newName).toLowerCase())).length === 0) {
            const newPerson = {
                name: newName,
                number: newNumber
            }
            setPersons(persons.concat(newPerson))
        } else {
            alert(`${newName} ya se encuentra registrado`)
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