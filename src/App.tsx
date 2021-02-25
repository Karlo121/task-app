import React, { useState } from 'react';
import Header from './components/Header';
import Task from './components/Tasks';
import GlobalStyle from './styles/global';
import { taskData } from './data/data';

const App: React.FC = () => {
  const [tasks, setTasks] = useState(taskData);
  return (
    <div className='container'>
      <GlobalStyle />
      <Header title='Task App' />
      <Task task={tasks} />
    </div>
  );
};

export default App;
