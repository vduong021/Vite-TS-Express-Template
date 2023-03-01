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

  const fetchData = async () => {
    try {
      const response = await fetch('https://dydxexpress.vercel.app/api');
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


  const handleAddNotes = async () => {
    if (note.length < 20 || note.length > 300) {
        
        alert('Note Form must have the following validations: Must not be shorter than 20 characters and Must not be longer than 300 characters');
        }
    
    else {
      const data = { note };
      try {
        const response = await fetch('https://dydxexpress.vercel.app/api', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const { message } = await response.json();
      } catch (error) {
        console.error(error);
      };
      fetchData()
    };
  };

  const handleSearchNotes = async () => {
    const data = { note };
    try {
      const response = await fetch('https://dydxexpress.vercel.app/api', {
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
    };
    fetchData();
  };

  const fetchNotes = savedNotes.map((el: Note, index: number) => (
    <Logs className="Log" key={index} data={el} />
  ));

  useEffect(() => {
    fetchData();
  }, []);

  return (
    
    <div className="App">
  
      <h1>Dydx Notes</h1>
      <div className="container w- mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10 text-gray-700">
        <label htmlFor="notes" className='text-gray-700 text-md font-bold mb-2'>
          Note:
          <input
            className='mx-4 text-white'
            type="text"
            id="note"
            placeholder="20-300 characters"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNote(e.target.value)
            }
          />
        </label>

        <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' onClick={handleAddNotes}>Add</button>
      </div>
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10 text-gray-700 ">
        <label htmlFor="notes" className='text-gray-700 text-md font-bold mb-2'>
          Search:
          <input
            id='note'
            className='lass="shadow appearance-none border rounded mx-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-white'
            type="text"
            
            placeholder="20-300 characters"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNote(e.target.value)
            }
          />
        </label>
        <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' onClick={handleSearchNotes}>Enter</button>
      </div>
      <div>{fetchNotes}</div>
    </div>
  );
};

export default Home;
