import styled from 'styled-components';
import { Times } from '@styled-icons/fa-solid/Times';

type ColorStateForm = {
  isReminder: boolean;
};

export const StyledTask = styled.div<ColorStateForm>`
  background: #2c2f33;
  color: white;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;

  border-left: ${(props) => (props.isReminder ? '5px solid #24BD64' : ' ')};

  h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const StyledTimes = styled(Times)`
  color: white;
`;
