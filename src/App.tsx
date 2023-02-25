import { useState, useEffect } from 'react'
import './App.css'
import Logs from './Logs'

function App() {
  const [savedNotes, setSavedNotes] = useState([])
  const [note, setNote] = useState('');

  const addNote = () => {
    const data = {
      note: note
    };
    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => console.log(data))
  };

  useEffect(() => {
    fetch('/api')
    .then(response => response.json())
    .then(data => {
      console.log('this is fetch', data);
      return setSavedNotes(data)
    })
  }, [])

  const fetchNotes = savedNotes.map((el, index) =>
    <Logs className='Log' key={index} data = {el} />
  )

  return (
    <div className="App">
      <h1>Dydx Notes</h1>
      <div className="card">
        <label htmlFor="notes">
          Note:
          <input 
            type="text" 
            id='note' 
            placeholder='20(Min)-300(Max) characters'
            onChange={e => setNote(e.target.value)} />
        </label>

        <button onClick={addNote}>
          Add
        </button>
      </div>
      <div className="search">
        <label htmlFor="notes">
          Search:
          <input type="text" id='search' placeholder='20(Min)-300(Max) characters' />
        </label>
        <button onClick={addNote}>
          Enter
        </button>
      </div>
      <div>
        {fetchNotes}
      </div>
    </div>
  )
}

export default App
