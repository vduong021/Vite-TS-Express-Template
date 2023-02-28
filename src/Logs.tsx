// import React, { useEffect, useState } from "react";
import Edit from "./Edit";


const Logs = (props: any) => {
  // const [noteLog, setNoteLog] = useState('');

  const deleteNote = (e: any) => {
    console.log('this is e', e)
    e.preventDefault();
    fetch(`/api/${e.target.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    window.location.reload()
  }

  return (
    <div className="logs">
      Notes:
      {props.data.note}
      {props.data.createdAt}
      <button 
        className="deleteBtn" 
        id = {props.data._id}
        onClick = {(e) => deleteNote(e)}
      > 
        Delete 
      </button>
      <Edit
        id = {props.data._id}
      />
    </div>
  )
}

export default Logs;

function id(id: any): BodyInit | null | undefined {
  throw new Error("Function not implemented.");
}
