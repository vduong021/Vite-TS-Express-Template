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
    console.log('this is e', e)
    e.preventDefault();
    fetch(`https://dydxexpress.vercel.app/api/${e.currentTarget.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(result => {result.json()})
    .then(data => {
      console.log('this data is deleted', data);
    })
    window.location.reload()
  }

  return (
    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal text-gray-500">
      <>
        <h4 className="text-2xl">
          <span className="font-bold">Note:</span>  {props.data.note}</h4> 
        Date Created: {props.data.createdAt}
      <button 
        className="deleteBtn" 
        id = {props.data._id}
        onClick = {e => deleteNote(e)}
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


