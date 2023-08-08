import React from 'react'
import { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';


function index() {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
    const [showAll, setShowAll] = useState(true);
    const [filterName, setFilterName] = useState('')


    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filterName={filterName} setFilterName={setFilterName} />
            <h2>add a new</h2>
            <PersonForm persons={persons} setPersons={setPersons} />
            <h2>Numbers</h2>
            <Persons persons={persons} filterName={filterName} />
        </div>
    )
}

export default index