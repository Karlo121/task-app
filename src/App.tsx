import React, { useState } from 'react';
import Header from './components/Header';
import Tasks, { TaskProps } from './components/Tasks';
import GlobalStyle from './styles/global';
import { taskData } from './data/data';
import AddTask from './components/AddTask';

const App: React.FC = () => {
  const [tasks, setTasks] = useState(taskData);

  const addTask = (task: TaskProps): void => {
    const id = Math.floor(Math.random() * 10000 + 1);
    const newTask = { ...task, id };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number): void => {
    setTasks(tasks.filter((task) => id !== task.id));
    console.log(tasks);
  };

  const toggleReminder = (id: number): void => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className='container'>
      <GlobalStyle />
      <Header title='Task App' />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks task={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No tasks to show'
      )}
    </div>
  );
};

export default App;
