import Edit from "./Edit";

interface LogProps {
  className?: string;
  data: {
    _id?: any;
    note?: string;
    createdAt?: Date;
  }
}

const Logs = (props: LogProps) => {

  const deleteNote = (e: React.MouseEvent<HTMLButtonElement>) => {

    e.preventDefault();
    fetch(`/api/${e.currentTarget.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    window.location.reload()
  }

  return (
    <div className="logs">
      <>
        {props.data.note}
        {props.data.createdAt}
      
      <button 
        className="deleteBtn" 
        id = {props.data._id}
        onClick = {(e: React.MouseEvent<HTMLButtonElement>) => deleteNote(e)}
      > 
        Delete 
      </button>
      <Edit
        id = {props.data._id}
      />
      </>
    </div>
  )
}

export default Logs;


