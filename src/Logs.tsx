import React, { useEffect, useState } from "react";



const Logs = (props: JSX.Element) => {
  const [noteLog, setNoteLog] = useState('');

  // const deleteNote = (e: any) => {
  //   e.preventDefault();
  //   fetch('/api', {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(id)
  //   }).then((res) => res.json())
  //     .then((data) => {
        
  //     })
  // }

  return (
    <div className="logs">
      Notes:
      {props.data.note}
      {props.data.createdAt}
    </div>
  )
}

export default Logs;