import { useState, useEffect } from 'react';
import './App.css';
import Logs from './Logs';

interface Note {
  _id: string;
  note: string;
  createdAt: Date;
}


const Home = (): JSX.Element => {
  const [savedNotes, setSavedNotes] = useState<Note[]>([]);
  const [note, setNote] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        // console.log('this is fetch', responseData);
        setSavedNotes(responseData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleAddNotes = async () => {
    const data = { note };
    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const { message } = await response.json();
      console.log(message);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchNotes = async () => {
    const data = { note };
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      setSavedNotes(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchNotes = savedNotes.map((el: Note, index: number) => (
    <Logs className="Log" key={index} data={el} />
  ));

  return (
    <div className="App">
      <h1>Dydx Notes</h1>
      <div className="card">
        <label htmlFor="notes">
          Note:
          <input
            type="text"
            id="note"
            placeholder="20(Min)-300(Max) characters"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNote(e.target.value)
            }
          />
        </label>

        <button onClick={handleAddNotes}>Add</button>
      </div>
      <div className="search">
        <label htmlFor="notes">
          Search:
          <input
            type="text"
            id="search"
            placeholder="20(Min)-300(Max) characters"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNote(e.target.value)
            }
          />
        </label>
        <button onClick={handleSearchNotes}>Enter</button>
      </div>
      <div>{fetchNotes}</div>
    </div>
  );
};

export default Home;
