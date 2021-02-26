import styled from 'styled-components';

export const StyledAddForm = styled.form`
  margin-bottom: 40px;
`;

export const StyledFormControl = styled.div`
  margin: 20px 0;
  label {
    display: block;
  }
  input {
    width: 100%;
    height: 40px;
    margin: 5px;
    padding: 3px 7px;
    font-size: 17px;
  }
`;

export const StyledFormControlCheck = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  label {
    display: block;
  }
  input {
    width: 100%;
    height: 40px;
    margin: 5px;
    padding: 3px 7px;
    font-size: 17px;
  }
  label {
    flex: 1;
  }
  input {
    flex: 2;
    height: 20px;
  }
`;

export const StyledInput = styled.input`
  display: inline-block;
  background: #2c2f33;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
  width: 100%;
  :focus {
    outline: none;
  }
  :active {
    transform: scale(0.98);
  }
`;
