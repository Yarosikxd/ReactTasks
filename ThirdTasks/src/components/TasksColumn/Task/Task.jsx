import React from 'react';

export default function Task({ task, onStatusChange, onDelete }) {
  return (
    <li>
      {task.title}
      {task.status === 0 && (
        <button onClick={() => onStatusChange(task.id, 1)}>In Progress</button>
      )}
      {task.status === 1 && (
        <>
          <button onClick={() => onStatusChange(task.id, 0)}>To Do</button>
          <button onClick={() => onStatusChange(task.id, 2)}>Done</button>
        </>
      )}
      {task.status === 2 && (
        <button onClick={() => onDelete(task.id)}>To Archive</button>
      )}
    </li>
  );
}
