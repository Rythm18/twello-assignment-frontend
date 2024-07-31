'use client';
import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import AddTask from './Addtask';

interface Task {
  _id: string;
  title: string;
  description?: string;
  priority: string;
  date: string;
  status: string;
}

interface Taskboard {
  heading: string;
  tasks: Task[];
}

const Todo = ({ heading, tasks}: Taskboard) => {
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);

  const handleAddTaskClick = () => {
    setIsAddTaskOpen(true);
  };

  const handleCloseAddTask = () => {
    setIsAddTaskOpen(false);
  };

  return (
    
    <div className='w-[365px] '>
      <h2 className="text-2xl font-semibold mb-4">{heading}</h2>
        
        <Droppable droppableId={heading}>
          {(provided) => (
            <ul
              className='rounded-xl h-[500px] overflow-y-scroll hide-scrollbar'
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              
              {tasks.map((task, index) => (
                <Draggable key={task._id} draggableId={task._id} index={index}>
                  {(provided) => (
                    <li
                      className="bg-gray-100 p-4 border rounded shadow-md mb-5 task-title"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <h3 className="text-gray-700 text-lg font-semibold">{task.title}</h3>
                      {task.description && (
                        <p className="text-gray-400 mt-2 text-balance task-description">{task.description}</p>
                      )}
                      <p className={`text-white w-fit p-1 rounded-lg text-sm px-2 mt-2 ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                      </p>
                        <p className="text-gray-500 mt-2">{task.date}</p>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>

      <button className="bg-gradient-to-b from-[#3A3A3A] to-[#202020] justify-center space-x-3 text-white p-3 rounded-lg flex items-center w-full mt-6" onClick={handleAddTaskClick}>
        <p>Add new task</p>
        <PlusIcon className="w-5 h-5 mr-2 text-white" />
      </button>
      <AddTask title={heading} isOpen={isAddTaskOpen} onClose={handleCloseAddTask} />
    </div>
  );
}

function getPriorityColor(priority: string) {
  switch (priority) {
    case 'Low':
      return 'bg-[#0ECC5A]';
    case 'Medium':
      return 'bg-[#FFA235]';
    case 'Urgent':
      return 'bg-[#FF6B6B]';
    default:
      return '';
  }
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
  );
}

export default Todo;
