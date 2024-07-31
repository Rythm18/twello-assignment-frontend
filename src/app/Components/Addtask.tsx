'use client';
import React, { useEffect, useState } from 'react';
import { addTaskRequest } from '../utils/api';
import { useRouter } from 'next/navigation';

interface AddTaskProps {
  title : string;
  isOpen: boolean;
  onClose: () => void;
}
const AddTask: React.FC<AddTaskProps> = ({title, isOpen, onClose }) => {
    const router = useRouter();
    const [status, setStatus] = React.useState(title);
    const [main, setMain] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('Low');
    const [date, setDate] = useState('');
    useEffect(() => {
      if(!title) setStatus('To Do');
    }, []);
    const add = async () => {
      try {
        const response = await addTaskRequest('/task/addTask', main, description, priority, date, status );
        window.location.reload();
        onClose();
      } catch (error) {
        console.error('Signup failed:', error);
      }
    };
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      add();
    };
  return (
    <div className={`fixed top-0 right-0 h-full w-full max-w-3xl bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
    <button className="p-3" onClick={onClose}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
    </button>
      <div className="p-9">
      <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Title" className="w-full p-2 font-semibold text-4xl border-hidden focus:outline-none focus:ring-0" required onChange={(e)=>setMain(e.target.value)}/>
          <table className="table-auto w-full">
            <tbody>
              <tr>
                <td className="py-2 pr-4"></td>
                <td></td>
              </tr>
              <tr>
                <td className="py-2 pr-4"><label className="block text-gray-700">Status</label></td>
                <td>
                  <select className="w-full p-2 border-none rounded focus:outline-none focus:ring-0"
                  value={status}
                  onChange={(e) => setStatus(e.target.value.toString())}>
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Under Review">Under Review</option>
                    <option value="Finished">Finished</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4"><label className="block text-gray-700">Description</label></td>
                <td><input type="text" className="w-full p-2 border-none rounded focus:outline-none focus:ring-0" placeholder="Add Description" onChange={(e)=>setDescription(e.target.value)}/></td>
              </tr>
              <tr>
                <td className="py-2 pr-4"><label className="block text-gray-700">Deadline</label></td>
                <td><input type="date" className="w-full p-2 border-none rounded focus:outline-none focus:ring-0" placeholder="Deadline" onChange={(e) => setDate(e.target.value)}/></td>
              </tr>
              <tr>
                <td className="py-2 pr-4"><label className="block text-gray-700">Priority</label></td>
                <td>
                  <select className="w-full p-2 border-none rounded focus:outline-none focus:ring-0" onChange={(e)=>setPriority(e.target.value)}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="Urgent">Urgent</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex mt-4">
            <button type="submit" className="bg-purple-700 text-white px-4 py-2 rounded">Add Task</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
