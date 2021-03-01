import React from 'react';
import { StyledButton } from '../styles/Button.style';

interface ButtonProps {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  showForm: boolean;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <StyledButton
      theme={props.showForm ? { main: '#FF4147' } : { main: '#24BD64' }}
      onClick={props.onClick}
    >
      {props.text}
    </StyledButton>
  );
};

export default Button;
