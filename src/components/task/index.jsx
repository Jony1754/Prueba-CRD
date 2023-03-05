import React from 'react';
import '../../styles/index.scss';
import './style.scss';
import deleteIcon from '../../assets/delete-button.svg';
import { Checkbox } from '../checkbox';
const Task = ({ title, completed, description }) => {
  return (
    <div className='task'>
      <figure className='task__delete'>
        <img src={deleteIcon} alt='' />
      </figure>
      <div className='task__content'>
        <div className='task__title'>
          <h3>{title}</h3>
        </div>
        <div className='task__description'>
          <p>This is how we do all the doings</p>
        </div>
      </div>
      <div className='task__checkbox'>
        <Checkbox completed={completed} />
      </div>
    </div>
  );
};

export default Task;
