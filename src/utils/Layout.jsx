import React from 'react';
import { Link } from 'react-router-dom';
import deletedIcon from '../assets/delete.svg';
import deleteIcon from '../assets/delete-button.svg';
import createIcon from '../assets/add.svg';
import completeIcon from '../assets/completed.svg';
import taskIcon from '../assets/tasks.svg';
import '../styles/taskPage.scss';
const Layout = ({ children }) => {
  return (
    <>
      <nav className='navbar'>
        <ul className='navbar__list'>
          <li className='navbar__list-item'>
            <picture className='navbar__list-item-icon'>
              <img src={taskIcon} alt='' />
            </picture>
            <p>Tasks</p>
          </li>
          <li className='navbar__list-item'>
            <picture className='navbar__list-item-icon'>
              <img src={createIcon} alt='' />
            </picture>
            <p>Create</p>
          </li>
          <li className='navbar__list-item'>
            <picture className='navbar__list-item-icon'>
              <img src={deletedIcon} alt='' />
            </picture>
            <p>Deleted</p>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
};

export default Layout;
