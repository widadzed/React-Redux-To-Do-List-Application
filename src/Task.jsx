import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from './store';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    const newDescription = prompt('Edit Task Description:', task.description);
    if (newDescription) {
      dispatch(editTask({ id: task.id, description: newDescription }));
    }
  };

  return (
    <li className={task.isDone ? 'completed' : ''}>
      <span onClick={handleToggle}>{task.description}</span>
      <button onClick={handleEdit}>Edit</button>
    </li>
  );
};

export default Task;
