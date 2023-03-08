import React, { useContext } from 'react';
import '../../styles/index.scss';
import './style.scss';
import deleteIcon from '../../assets/delete-button.svg';
import { Checkbox } from '../checkbox';
import { AppContext } from '../../App';

import Swal from 'sweetalert2';

const Task = ({ title, completed, description, id, key }) => {
  const { actions } = useContext(AppContext);

  const handleDelete = (id) => {
    actions.deleteTask(id);
    Swal.fire('NICE!', 'Task deleted correctly!', 'success');
  };
  return (
    <div className='task'>
      <figure className='task__delete' onClick={() => handleDelete(id)}>
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
        <Checkbox key={key} completed={completed} />
      </div>
    </div>
  );
};

export default Task;
