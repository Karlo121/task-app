import React from 'react';
import { StyledTask, StyledTimes } from '../styles/Task.style';

interface Props {
  task: {
    text: string;
    day: string;
    id: number;
    reminder: boolean;
  };
  onDelete(id: number): void;
  onToggle(id: number): void;
}

const Task: React.FC<Props> = (props: Props) => {
  const { task } = props;
  return (
    <StyledTask
      isReminder={task.reminder}
      onDoubleClick={() => props.onToggle(task.id)}
    >
      <h3>
        {task.text}
        <StyledTimes size='20' onClick={() => props.onDelete(task.id)} />
      </h3>
      <p>{task.day}</p>
    </StyledTask>
  );
};

export default Task;
