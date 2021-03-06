import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-block;
  background: #2c2f33;
  color: #fff;
  border: none;
  padding: 10px 15px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;

  &:focus {
    outline: none;
  }
  :active {
    transform: scale(0.98);
  }

  background: ${(props) => props.theme.main};
`;
