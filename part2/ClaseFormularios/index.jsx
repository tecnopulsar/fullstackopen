import React, { useState } from 'react'
import Note from './components/Note'

function index(props) {
    const [notes, setNotes] = useState(props.notes)
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(true)

    const addNote = (event) => {
        event.preventDefault()
        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5,
            id: notes.length + 1,
        }

        setNotes(notes.concat(noteObject))
        setNewNote('')
    }

    const handleNoteChange = (event) => {
        setNewNote(event.target.value)
    }

    const notesToShow = showAll ? notes : notes.filter((note)=>note.important)

    return (
        <div>
            <h1>Notes</h1>
            <div>
                <button onClick={()=>setShowAll(!showAll)}>
                    show {showAll ? 'import' : 'all'}
                </button>
            </div>
            <ul>
                {notesToShow.map(note =>
                    <Note key={note.id} note={note} />
                )}
            </ul>
            <form onSubmit={addNote}>
                <input type='text' value={newNote} onChange={handleNoteChange} placeholder='a new note...' />
                <button type="submit">save</button>
            </form>
        </div>
    )
}

export default index