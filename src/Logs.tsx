import Edit from "./Edit";
import { useEffect } from 'react';
import Note from './Home';

interface LogProps {
  key?: number,
  setRefresh?: any,
  fetchData?: any,
  className?: string;
  data: {
    _id?: any;
    note?: string;
    createdAt?: Date;
  }
}



const Logs = (props: LogProps) => {

  const deleteNote = async (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('this is refresh', props.setRefresh)
    try {
      e.preventDefault();
      const response = await fetch(`https://dydx-express-e5pbsbqzs-vduong021.vercel.app/api/${e.currentTarget.id}`, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log('this data is deleted', response);
      props.setRefresh(true);
    } catch (error) {
      console.error('An error occurred while deleting the note:', error);
    }
  };




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


