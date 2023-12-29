// TaskList.js
import React from 'react';

const TaskList = ({ tasks, deleteTask, updateTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <div>
            <strong>{task.name}</strong>
          </div>
          <div>{task.description}</div>
          <button onClick={() => updateTask(task.id)}>Update</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

