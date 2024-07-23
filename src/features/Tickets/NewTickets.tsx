import { ChevronDown } from 'lucide-react';
import  { useState } from 'react';
import {  useDispatch } from 'react-redux';
import { addTicket as addTicketLocal} from './ticketSlice';
import ticketApi from "./ticket.Api";
import {toast} from 'sonner'


function NewTickets() {
  const [subject, setSubject] = useState('');
  const [status, setStatus] = useState('');
  const [description, setDescription] = useState('');
const dispatch = useDispatch();
const [addTicket, { isLoading, isError, error }] = ticketApi.useAddTicketMutation();

const handleAddTicket = async () => {
  if (subject.trim() && status.trim() && description.trim())  {
    try{
      console.log("Attempting to add ticket...")
      const newTicket = await addTicket({ subject, status, description }).unwrap();
      toast.success("Ticket sent👍")
    dispatch(addTicketLocal(newTicket.subject))
    dispatch(addTicketLocal(newTicket.status))
    dispatch(addTicketLocal(newTicket.description))
    setSubject('');
    setStatus('');
    setDescription('');

    } catch(error){
      console.error("Failed to add the ticket:", error)
    }
  } else {
    console.warn ("text input empty")
  }
};
if (isLoading) {
  console.log('Adding ticket...');
}

if (isError) {
  console.error('Error while adding ticket:', error);
}
  return (
    <div className="py-6 rounded-lg bg-gray-100 max-w-8xl">
      <div className="flex gap-2 items-center mb-10">
        <h4 className="text-indigo-700 text-xl font-semibold">New Tickets</h4>
        <h4 className="text-stone-400">| Today</h4>
        <span className='items-center text-black ml-auto'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
      </div>
      <div className='border p-4 mr-3 rounded-lg bg-white shadow-md mt-3  ml-9'>
      <div className="flex justify-center">
        
      <h3 className="text-4xl font-bold text-gray-400"><input type="text" placeholder="Ticket Subject..." id="" value={subject} onChange={(e) => setSubject(e.target.value)}/></h3>
    </div>
    
        <div className='border-2 border-gray-200 rounded-lg m-4 '>
         <div className=" flex ">
         <h2 className='text-black m-7'>Details </h2>
         <ChevronDown className='ml-auto mr-5 m-7' />
         </div>
          <hr />
          <div className="flex items-center mr-10 m-8 gap-48">
            <div className="flex flex-col items-center ml-12">
              <h3 className='mb-2 text-gray-300'>CREATED</h3>
              <span className="shadow-md bg-gray-100 text-black p-4">📅 Nov 29, 2021</span>
            </div>
            <div className="flex flex-col items-center mx-6">
              <h3 className='mb-2 text-gray-300'>STATUS</h3>
              <div className='flex items-center text-sky-500 font-semibold p-4'>
                {/* <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="3.35327" cy="3.5" r="3" fill="#38BDF8" />
                </svg> */}
                <select
        className="p-2 border rounded mt-1 bg-gray-200 shadow-md" value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
                <option className="ml-3 ">Select Booking Status</option>
                <option value="open">Urgent</option>
        <option value="completed">Medium</option>
        <option value="active">High priority</option>
        <option value="cancelled">Low</option>
        </select>
              </div>
            </div>
            <div className="flex flex-col items-center ml-6">
              <h3 className='mb-2 text-gray-300'>UPDATE DATE</h3>
              <div className='flex items-center'>
                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16.3533" cy="16" r="15.5" fill="white" stroke="#64748B" stroke-dasharray="4 4" />
                  <path d="M21.3532 10.1667H11.3532C10.4327 10.1667 9.68652 10.9129 9.68652 11.8334V21.8334C9.68652 22.7539 10.4327 23.5001 11.3532 23.5001H21.3532C22.2737 23.5001 23.0199 22.7539 23.0199 21.8334V11.8334C23.0199 10.9129 22.2737 10.1667 21.3532 10.1667Z" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M19.6865 8.5V11.8333" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M13.0198 8.5V11.8333" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M9.68652 15.1667H23.0199" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M15.5198 18.5H16.3531" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16.3533 18.5V21" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <input type="date" className="ml-3 p-4 text-gray-500" id="" />
              </div>
            </div>
          </div>
        </div>
        <div className='m-10'>
        <h3 className='text-black font-semibold'>Description</h3>
        <div className='mt-5 text-gray-500'>
        <textarea
              placeholder='Ticket Description...'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="p-2 border rounded w-full h-28 bg-gray-200"
            />
            </div>
        <br />
        <button className='bg-blue-600 p-3 mt-4 rounded-lg px-5 text-white font-semibold' onClick={handleAddTicket}>+ Add</button>
      </div>
      </div>
      
    </div>
  );
}

export default NewTickets;
