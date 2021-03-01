import React from 'react';

import { StyledHeader } from '../styles/Header.style';
import Button from './Button';
import logo from '../images/logo.jpg';

interface HeaderProps {
  title: string;
  onAdd(): void;
  showForm: boolean;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps): JSX.Element => {
  return (
    <StyledHeader>
      <img src={logo} alt='Logo' height='50px' />
      <h1>{props.title}</h1>
      <Button
        showForm={props.showForm}
        text={props.showForm ? 'Close' : 'Add'}
        onClick={props.onAdd}
      />
    </StyledHeader>
  );
};

export default Header;
