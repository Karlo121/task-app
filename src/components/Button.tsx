import React from 'react';
import { StyledButton } from '../styles/Button.style';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return <StyledButton>{props.text}</StyledButton>;
};

export default Button;
