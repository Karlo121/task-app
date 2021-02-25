import React from 'react';

import { StyledHeader } from '../styles/Header.style';
import Button from './Button';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <StyledHeader>
      <h1>{props.title}</h1>
      <Button text='Add' />
    </StyledHeader>
  );
};

export default Header;
