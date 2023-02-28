// import { useState, useEffect } from 'react';
// import './App.css';
// import Logs from './Logs';

// interface Note {
//   _id: string;
//   note: string;
//   createdAt: Date;
// }

// const Search = () => {
//   const [saveNotes, setSaveNotes] = useState<Note[]>([]);
//   const [note, setNote] = useState<string>('');

//   const searchNotes = async () => {
//     const data = {
//       note: note
//     };
//     try {
//       const response = await fetch('/api/search', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       });
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const responseData = await response.json();
//       setSaveNotes(responseData);
//     } catch (error) {
//       console.error(error);
//     }
//   };
  

//   const fetchNotes = saveNotes.map((el: Note, index: number) =>
//     <Logs className='Log' key={index} data = {el} />
//   );

//   return (
//     <div className="App">
//       <h1>Dydx Notes</h1>
//       <div className="search">
//         <label htmlFor="notes">
//           Search:
//           <input type="text" id='search' placeholder='20(Min)-300(Max) characters' onChange={e => setNote(e.target.value)}/>
//         </label>
//         <button onClick={searchNotes}>
//           Enter
//         </button>
//       </div>
//       <div>
//         {fetchNotes}
//       </div>
//     </div>
//   )
// }

// export default Search;
