import React, { useEffect } from 'react'
import { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import crudService from './services/crud'
import NotificationError from '../Notes/NotificationError';
import NotificationSuccess from './components/NotificationSuccess';

function index() {
  const [persons, setPersons] = useState([
  ])
  const [showAll, setShowAll] = useState(true);
  const [filterName, setFilterName] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  useEffect(() => {
    crudService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [persons])

  return (
    <div>
      <h2>Phonebook</h2>
      <NotificationError message={errorMessage} />
      <NotificationSuccess message={successMessage} />
      <Filter filterName={filterName} setFilterName={setFilterName} />
      <h2>add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} setSuccessMessage={setSuccessMessage} />
      <h2>Numbers</h2>
      <Persons 
        persons={persons} 
        setPersons={setPersons} 
        filterName={filterName} 
        setSuccessMessage={setSuccessMessage} 
        setErrorMessage={setErrorMessage} 
        />
    </div>
  )
}

export default index