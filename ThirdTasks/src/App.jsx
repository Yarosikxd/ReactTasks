import React, { useState, useEffect } from 'react';
import TaskColumn from './components/TasksColumn/TasksColumn';
import './App.css';


function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('https://6675570ea8d2b4d072efa0bb.mockapi.io/tasks');
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []); 

  const handleStatusChange = (id, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const todoTasks = tasks.filter((task) => task.status === 0);
  const inProgressTasks = tasks.filter((task) => task.status === 1);
  const doneTasks = tasks.filter((task) => task.status === 2);

  return (
    <div className="task-container">
    <TaskColumn
      title="To Do"
      tasks={todoTasks}
      onStatusChange={handleStatusChange}
    />
    <TaskColumn
      title="In Progress"
      tasks={inProgressTasks}
      onStatusChange={handleStatusChange}
    />
    <TaskColumn
      title="Done"
      tasks={doneTasks}
      onStatusChange={handleStatusChange}
      onDelete={handleDelete}
    />
  </div>
  );
}

export default App;
