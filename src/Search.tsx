import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Logs from './Logs';

const Search = () => {
  const [saveNotes, setSaveNotes] = useState([]);
  const [note, setNote] = useState('');


  const searchNotes = () => {
    const data = {
      note: note
    };
    fetch('/api/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        setSaveNotes(data)
      })
  };



  const fetchNotes = saveNotes.map((el, index) =>
    <Logs className='Log' key={index} data = {el} />
  );

  return (
    <div className="App">
      <h1>Dydx Notes</h1>
      <div className="search">
        <label htmlFor="notes">
          Search:
          <input type="text" id='search' placeholder='20(Min)-300(Max) characters' onChange={e => setNote(e.target.value)}/>
        </label>
        <button onClick={searchNotes}>
          Enter
        </button>
      </div>
      <div>
        {fetchNotes}
      </div>
    </div>
  )
}

export default Search;