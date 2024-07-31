'use client';
import Link from 'next/link'
import React, { useState } from 'react'
import Avatar from 'react-avatar';
import AddTask from './Addtask';

const Sidebar = () => {
  
  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }

  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
    
    const handleAddTaskClick = () => {
        setIsAddTaskOpen(true);
      };
    
      const handleCloseAddTask = () => {
        setIsAddTaskOpen(false);
      };
  return (
    <div className="flex flex-col border-r bg-muted/40">
      <aside className="w-72 p-4 h-screen bg-white border-r">
        
        <div className="mb-6">
          <div className="flex space-x-2 items-center">
          <Avatar googleId="118096717852922241760" size="40" round={true} />
            <p className="text-xl font-semibold">Joe Gardner</p>
          </div>
          <button  className="mt-3 w-full rounded-lg bg-slate-200 text-center p-2 hover:bg-slate-300" onClick={logout}>
              Logout
            </button>
        </div>
        <nav className="space-y-2">
          <Link
            href="#"
            className="flex items-center p-2 text-lg ont-semibold bg-slate-200 text-black bg-primary rounded-md"
            prefetch={false}
          >
            <HomeIcon className="w-5 h-5 mr-2" />
            Home
          </Link>
          <Link
            href="#"
            className="flex items-center p-2 text-lg text-gray-700 rounded-md"
            prefetch={false}
          >
            <CircuitBoardIcon className="w-5 h-5 mr-2" />
            Boards
          </Link>
          <Link
            href="#"
            className="flex items-center p-2 text-lg  text-gray-700 rounded-md"
            prefetch={false}
          >
            <SettingsIcon className="w-5 h-5 mr-2" />
            Settings
          </Link>
          <Link
            href="#"
            className="flex items-center p-2 text-lg ont-semibold text-gray-700 rounded-md"
            prefetch={false}
          >
            <GroupIcon className="w-5 h-5 mr-2" />
            Teams
          </Link>
          <Link
            href="#"
            className="flex items-center p-2 text-lg ont-semibold text-gray-700 rounded-md"
            prefetch={false}
          >
            <InfoIcon className="w-5 h-5 mr-2" />
            Analytics
          </Link>
        </nav>
        <button className="bg-gradient-to-b from-[#4C38C2] to-[#2F2188] justify-center space-x-3 text-white p-3 rounded-lg flex items-center w-full mt-6" onClick={handleAddTaskClick}>
            <p>Create new task</p>
            <PlusIcon className="w-5 h-5 mr-2 bg-white rounded-full text-[#2F2188]" />
        </button>
      </aside>

      <div className='h-screen content-end bg-white border-r p-3' >
            <button className="flex items-center w-full bg-gray-200 p-2 rounded-lg">
                <DownloadIcon  className='mr-4'/>
                <div className='flex flex-col'>
                    <p>Download the app</p>
                    <p className='text-sm'>Get Full Experiencxe</p>
                </div>
            </button>
        </div>
            <AddTask title='' isOpen={isAddTaskOpen} onClose={handleCloseAddTask} />
    </div>
  )
}

function CircuitBoardIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M11 9h4a2 2 0 0 0 2-2V3" />
        <circle cx="9" cy="9" r="2" />
        <path d="M7 21v-4a2 2 0 0 1 2-2h4" />
        <circle cx="15" cy="15" r="2" />
      </svg>
    )
  }
  
  
  function DownloadIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" x2="12" y1="15" y2="3" />
      </svg>
    )
  }
  
  
  function GroupIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
        <path d="M3 7V5c0-1.1.9-2 2-2h2" />
        <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
        <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
        <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
        <rect width="7" height="5" x="7" y="7" rx="1" />
        <rect width="7" height="5" x="10" y="12" rx="1" />
      </svg>
    )
  }
  
  
  function HomeIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  }
  
  
  function InfoIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    )
  }
  
  
  function ListIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
        <line x1="8" x2="21" y1="6" y2="6" />
        <line x1="8" x2="21" y1="12" y2="12" />
        <line x1="8" x2="21" y1="18" y2="18" />
        <line x1="3" x2="3.01" y1="6" y2="6" />
        <line x1="3" x2="3.01" y1="12" y2="12" />
        <line x1="3" x2="3.01" y1="18" y2="18" />
      </svg>
    )
  }
  
  
  function LogOutIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" x2="9" y1="12" y2="12" />
      </svg>
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
  
  
  function SettingsIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  }
  
  
  function XIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    )
  }


export default Sidebar