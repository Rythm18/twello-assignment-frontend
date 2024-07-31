'use client';
import React, { useState } from 'react'
import AddTask from './Addtask'

const Filters = () => {
    const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
    
    const handleAddTaskClick = () => {
        setIsAddTaskOpen(true);
      };
    
      const handleCloseAddTask = () => {
        setIsAddTaskOpen(false);
      };
    return (
        <div className="flex items-center mb-6 w-full justify-between">
            <div>
            <div className="relative flex items-center">
            <input
            type="text"
            placeholder="Search"
            className="bg-white text-gray-700 p-2 rounded-lg ml-4 w-96 pr-10"
            />
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-gray-500 absolute right-3"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
            />
            </svg>
        </div>
            </div>
            <div className='mr-7 space-x-7'>
                <button className=" bg-gray-100 rounded-lg p-3 text-black/60 hover:bg-gray-200">
                    Calendar view 📅
                </button>
                <button className=" bg-gray-100 rounded-lg p-3 text-black/60 hover:bg-gray-200">
                    Automation ✨
                </button>
                <button className=" bg-gray-100 rounded-lg p-3 text-black/60 hover:bg-gray-200">
                    Filter 🔍
                </button>
                <button className=" bg-gray-100 rounded-lg p-3 text-black/60 hover:bg-gray-200">
                    Share 📤
                </button>
                <button className="bg-gradient-to-b from-[#4C38C2] to-[#2F2188] justify-center space-x-3 text-white p-3 rounded-lg inline-flex items-center" onClick={handleAddTaskClick}>
                    <p>Create new task</p>
                    <PlusIcon className="w-5 h-5 mr-2 bg-white rounded-full text-[#2F2188]" />
                </button>
                <AddTask title='' isOpen={isAddTaskOpen} onClose={handleCloseAddTask} />
            </div>

        </div>
    )
}

function PlusIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </svg>
    )
  }

export default Filters