
import { useState, useReducer } from 'react';
import './App.scss';
import { v4 as uuid } from 'uuid'

const initialNoteState = {
  lastNoteCreated: null,
  totalNotes: 0,
  notes: [],
}

const notesReducer = (prevState, action) => {
  switch(action.type) {
    case 'ADD_NOTE': {
      const newState = {
        lastNoteCreated: new Date().toTimeString().slice(0, 8),
        totalNotes: prevState.notes.length + 1,
        notes: [...prevState.notes, action.payload]
      }

      // testing
      console.log('After ADD_NOTE: ', newState)
      return newState

    }
    default : {}
  }
} 

function App() {

  const [noteInput, setNoteInput] = useState('')
  const [notesState, dispatch] = useReducer(notesReducer, initialNoteState)
  
  const addNote = event => {
    event.preventDefault() //stop to reloading...

    //to return a blank sticky notes
    if(!noteInput) return

    const newNote = {
      id: uuid(),
      text: noteInput,
      rotate: Math.floor(Math.random() * 20),
    }

    dispatch({ type: 'ADD_NOTE', payload: newNote })
    setNoteInput('') //empty
  }

  const dropNote = event => {
    event.target.style.left = `${event.pageX - 50}px`
    event.target.style.top = `${event.pageY - 50}px`
  }

  const dragOver = event => {
    event.stopPropagation()
    event.preventDefault()
  }

  return (
    <div className="app" onDragOver={dragOver} >
      <h1>Sticky Notes</h1>
      <h6 className='devName'>by Luan Rabelo</h6>
      <form onSubmit={addNote} className='note-form'>
        <textarea value={noteInput} 
        onChange={event => setNoteInput(event.target.value)}
        placeholder='Create a new note...'></textarea>
        <button>ADD</button>
      </form>

      {/* testing... */}
      {/* {noteInput} */}

      {notesState
        .notes
        .map(note => (
          <div className='note' style={{ 
            transform: `rotate(${note.rotate}deg)`}} 
            draggable="true"
            onDragEnd={dropNote}
            key={note.id}
            >
            
            <div className='close'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

            </div>

            <pre className='text'>{note.text}</pre>
          </div>
        ))
      
      }

    </div>
  );

  // put the version in the final 1.0.0
}

export default App;
