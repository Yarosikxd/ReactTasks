import React from 'react';
import Task from './Task/Task.jsx';
import '../TasksColumn/TaskColum.css'

export default function TaskColumn({ title, tasks, onStatusChange, onDelete }) {
  return (
    <div className="task-column">
      <h2>{title}</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task
              task={task}
              onStatusChange={onStatusChange}
              onDelete={onDelete}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
