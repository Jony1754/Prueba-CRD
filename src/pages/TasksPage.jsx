import React from 'react';
import '../styles/taskPage.scss';
import Task from '../components/task';
import { ProgressBar } from 'react-loader-spinner';
import 'react-loading-skeleton/dist/skeleton.css';
import { SearchBar } from '../components/searchBar';

const TasksPage = () => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
        console.log('tasks: ', json);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  if (!data) {
    return (
      <>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <ProgressBar
            height='80'
            width='80'
            ariaLabel='progress-bar-loading'
            wrapperStyle={{}}
            wrapperClass='progress-bar-wrapper'
            borderColor='#2d3748ff'
            barColor='#aeb3b8'
          />
        </div>
      </>
    );
  }

  return (
    <section className='tasks'>
      <article className='tasks__title'>
        <h2>Newly added tasks</h2>
      </article>
      <SearchBar />
      <article className='tasks__list'>
        {data.map((task) => {
          return (
            <Task
              key={task.id}
              title={task.title}
              completed={task.completed}
              description={task.description}
            />
          );
        })}
        <Task />
      </article>
    </section>
  );
};

export default TasksPage;
