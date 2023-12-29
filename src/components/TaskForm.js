// TaskForm.js
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      name: taskName,
      description: taskDescription,
    };
    addTask(newTask);
    setTaskName('');
    setTaskDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task Name:
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </label>
      <label>
        Task Description:
        <textarea
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;

