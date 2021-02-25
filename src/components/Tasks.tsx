import React from 'react';
import { taskData } from '../data/data';
import Task from './Task';

export interface TaskProps {
  id: number;
  text: string;
  day: string;
  reminder: boolean;
}

export interface TasksProps {
  task: TaskProps[];
}

const Tasks: React.FC<TasksProps> = () => {
  return (
    <>
      {taskData.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  );
};

export default Tasks;
