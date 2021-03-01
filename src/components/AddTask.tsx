import { useState } from 'react';
import {
  StyledAddForm,
  StyledFormControl,
  StyledFormControlCheck,
  StyledInput,
} from '../styles/AddTask.style';

interface AddTaskProps {
  onAdd(task: { text: string; day: string; reminder: boolean }): void;
}

const AddTask: React.FC<AddTaskProps> = (props: AddTaskProps) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!text) {
      alert('Please add a task!');
      return;
    }

    props.onAdd({ text, day, reminder });
    setText('');
    setDay('');
    setReminder(false);
  };

  return (
    <StyledAddForm onSubmit={onSubmit}>
      <StyledFormControl>
        <label>Task</label>
        <input
          type='text'
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder='Add Task'
        />
      </StyledFormControl>
      <StyledFormControl>
        <label>Day & Time</label>
        <input
          type='text'
          placeholder='Add Day & Time'
          value={day}
          onChange={(e) => {
            setDay(e.target.value);
          }}
        />
      </StyledFormControl>
      <StyledFormControlCheck className='form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          value={reminder ? 'true' : 'false'}
          checked={reminder}
          onChange={(e) => {
            setReminder(e.currentTarget.checked);
          }}
        />
      </StyledFormControlCheck>

      <StyledInput type='submit' value='Save Task' className='btn btn-block' />
    </StyledAddForm>
  );
};

export default AddTask;
