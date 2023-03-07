import React from 'react';

export const usePostTask = () => {
  const [tasks, setTasks] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

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

  return { tasks, loading, error, setTasks, setLoading, setError };
};
