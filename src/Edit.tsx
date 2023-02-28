import { useState } from "react";
import Popup from "reactjs-popup";

const Edit = (props: any) => {
  const [editNote, setEditNote] = useState('');

  const editHandle = (e: any) => {
    const data = {
      note: editNote
    };
    console.log(e.target.id)
    fetch(`/api/${e.target.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => console.log(data) )
  };

  return (
    <div>
      <Popup trigger=
        {<button>Edit</button>}
      >          
        <label htmlFor="notes">
          Note:
          <input 
            type="text" 
            
            placeholder='20(Min)-300(Max) characters'
            onChange={e => setEditNote(e.target.value)} />
        </label>
        <button
          id={props.id}
          onClick={e => editHandle(e)}
        >
          Submit Edit
        </button>
      </Popup>
    </div>
  );
};

export default Edit;