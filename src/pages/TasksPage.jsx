import React from 'react';
import '../styles/taskPage.scss';
import Task from '../components/task';
const TasksPage = () => {
  const [loading, setLoading] = React.useState(false);
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
  if (!data) return <p>Loading...</p>;

  return (
    <section className='tasks'>
      <article className='tasks__title'>
        <h2>Newly added tasks</h2>
      </article>
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
