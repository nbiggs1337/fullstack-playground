import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/tasks')
      .then((response) => setTasks(response.data))
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []);

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onSubmit={(task) => console.log(task)} />
      <TaskList tasks={tasks} onUpdate={() => {}} onDelete={() => {}} />
    </div>
  );
}

export default App;