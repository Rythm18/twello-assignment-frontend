'use client';
import React, { useEffect } from 'react';
import Filters from './Filters';
import Todo from './Todo';
import { apiRequest } from '../utils/api';
import { DragDropContext } from '@hello-pangea/dnd';

interface Task {
  _id: string;
  title: string;
  description?: string;
  priority: string;
  date: string;
  status: string;
}

const Main = () => {
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [pendingUpdates, setPendingUpdates] = React.useState<{ taskId: string; status: string }[]>([]);
  const priorityOrder: Record<string, number> = {
    Low: 1,
    Medium: 2,
    Urgent: 3,
  };

  const fetchTasks = async () => {
    try {
      const data = await apiRequest('/task/getTasks');
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Function to update task status optimistically
  const updateTaskStatus = async (taskId: string, newStatus: string) => {
    console.log('Updating task status:', taskId, newStatus);
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task._id === taskId ? { ...task, status: newStatus } : task
      )
    );
    try {
      await fetch('https://trello-clone-backend-mu.vercel.app/api/v1/task/updateTasksBatch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ taskId , newStatus }),
      });

      setPendingUpdates([]);
    } catch (error) {
      console.error('Error updating tasks:', error);
    }
  };


  const onDragEnd = async (result: any) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.index === source.index && destination.droppableId === source.droppableId) {
      return;
    }

    updateTaskStatus(draggableId, destination.droppableId);

    setPendingUpdates(prev => [...prev, { taskId: draggableId, status: destination.droppableId }]);
  };

  const sortedTasks = tasks.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
  const toDoTasks = sortedTasks.filter(task => task.status === 'To Do');
  const inProgressTasks = sortedTasks.filter(task => task.status === 'In Progress');
  const underReviewTasks = sortedTasks.filter(task => task.status === 'Under Review');
  const finishedTasks = sortedTasks.filter(task => task.status === 'Finished');

  return (
    <div className='mt-6 p-2'>
      <Filters />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className='flex gap-5 justify-evenly w-full bg-white p-3 rounded-lg'>
          <Todo heading='To Do' tasks={toDoTasks} />
          <Todo heading='In Progress' tasks={inProgressTasks} />
          <Todo heading='Under Review' tasks={underReviewTasks}  />
          <Todo heading='Finished' tasks={finishedTasks} />
        </div>
      </DragDropContext>
    </div>
  );
}

export default Main;
