import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../styles/taskPage.scss';
import Swal from 'sweetalert2';
import { AppContext } from '../App';
const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [id, setId] = useState('');
  const { actions } = useContext(AppContext);
  const onSubmit = (e) => {
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        console.log('response IN CREATE TASK; ', json);
        actions.addTask(json);
        // Swal.fire('NICE!', 'Task added correctly!', 'success');
        toast.success('🦄 Task successfully created', {
          position: 'bottom-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      })
      .catch((error) => {
        console.log('error IN CREATE TASK; ', error);
        toast.error('🦄 Task not created', {
          position: 'bottom-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      });
  };

  return (
    <form onSubmit={onSubmit} className='create__form'>
      <div className='create__form-group'>
        <label htmlFor='title'>TITLE</label>
        <input
          type='text'
          id='title'
          name='title'
          placeholder='title of your task'
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='create__form-group'>
        <label htmlFor=''>TASK DESCRIPTION</label>
        <input
          type='text'
          id='description'
          placeholder='describe your task'
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button className='create__form-button' type='submit'>
        ADD TASK
      </button>
      <ToastContainer />
    </form>
  );
};

export default CreateTask;
