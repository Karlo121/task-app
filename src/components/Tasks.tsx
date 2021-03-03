import React from 'react';
import Task from './Task';

export interface TaskProps {
  id: number;
  text: string;
  day: string;
  reminder: boolean;
}

export interface TasksProps {
  task: TaskProps[];
  onDelete(id: number): void;
  onToggle(id: number): void;
}

const Tasks: React.FC<TasksProps> = ({ onDelete, task, onToggle }) => {
  return (
    <>
      {task.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  );
};

export default Tasks;
