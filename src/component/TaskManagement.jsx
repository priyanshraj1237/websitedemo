import React, { useState } from 'react';

const TaskManagement = () => {
  const [tasks, setTasks] = useState([
    { title: 'Complete project proposal', completed: false },
    { title: 'Fix bugs in the app', completed: true },
  ]);
  const [newTask, setNewTask] = useState('');

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const addTask = () => {
    setTasks([...tasks, { title: newTask, completed: false }]);
    setNewTask('');
  };

  return (
    <div>
      <h3>Task Management</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {tasks.map((task, idx) => (
          <li key={idx} style={{ marginBottom: '10px' }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(idx)}
            />
            {task.title}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New Task"
        style={{ marginRight: '10px', padding: '8px' }}
      />
      <button onClick={addTask} style={{ padding: '8px 16px' }}>
        Add Task
      </button>
    </div>
  );
};

export default TaskManagement;
