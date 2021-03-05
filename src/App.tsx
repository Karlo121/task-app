import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks, { TaskProps } from './components/Tasks';
import GlobalStyle, { StyledH2 } from './styles/global';
import { taskData } from './data/data';
import AddTask from './components/AddTask';

const App: React.FC = () => {
  const [tasks, setTasks] = useState(taskData);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const r = await fetch('http://localhost:5000/tasks');
    const data = await r.json();

    return data;
  };

  const fetchTask = async (id: number) => {
    const r = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await r.json();

    return data;
  };

  const addTask = async (task: TaskProps) => {
    const r = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(task),
    });

    const data = await r.json();
    setTasks([...tasks, data]);
  };

  const deleteTask = async (id: number) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'Delete' });
    setTasks(tasks.filter((task) => id !== task.id));
  };

  const toggleReminder = async (id: number) => {
    const taskToToggle = await fetchTask(id);
    const newTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const r = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(newTask),
    });

    const data = await r.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  return (
    <div className='container'>
      <GlobalStyle />
      <Header
        title='Task App'
        onAdd={() => {
          setShowForm(!showForm);
        }}
        showForm={showForm}
      />
      {showForm && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks task={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <StyledH2>No tasks to show</StyledH2>
      )}
    </div>
  );
};

export default App;
