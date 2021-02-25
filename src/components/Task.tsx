import React from 'react';
import { StyledTask } from '../styles/Task.style';

interface Props {
  task: {
    text: string;
    day: string;
  };
}

const Task: React.FC<Props> = (props: Props) => {
  const { task } = props;
  return (
    <StyledTask>
      <h3>{task.text}</h3>
      <p>{task.day}</p>
    </StyledTask>
  );
};

export default Task;
