import { useState, MouseEvent } from "react";
import Popup from "reactjs-popup";

interface EditProps {
  id: string;
}

const Edit: React.FC<EditProps> = ({ id }) => {
  const [editNote, setEditNote] = useState<string>('');

  const editHandle = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data = {
      note: editNote
    };
    console.log(e.currentTarget.id)
    try {
      const response = await fetch(`https://dydxexpress.vercel.app/api/${e.currentTarget.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error(error);
    };
    window.location.reload()
  };  

  return (
    <>
      <Popup trigger={
        <button>Edit</button>
      }>
        <div className="edit-popup">          
          <label htmlFor="notes">
            Note:
            <input 
              type="text" 
              placeholder='20(Min)-300(Max) characters'
              onChange={e => setEditNote(e.target.value)} />
          </label>
          <button
            id={id}
            onClick={e => editHandle(e)}
          >
            Submit Edit
          </button>
        </div>  
      </Popup>
    </>
  );
};

export default Edit;
