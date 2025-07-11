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

  const addTask = async (task) => {
  try {
    const response = await axios.post('http://localhost:5000/api/tasks', task);
    setTasks([...tasks, response.data]);
  } catch (error) {
    console.error('Error adding task:', error);
  }
};

const updateTask = async (id, updatedTask) => {
  try {
    const response = await axios.put(`http://localhost:5000/api/tasks/${id}`, updatedTask);
    setTasks(tasks.map((task) => (task._id === id ? response.data : task)));
  } catch (error) {
    console.error('Error updating task:', error);
  }
};



  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onSubmit={addTask} />
      <TaskList tasks={tasks} onUpdate={updateTask} onDelete={() => {}} />
    </div>
  );
}

export default App;