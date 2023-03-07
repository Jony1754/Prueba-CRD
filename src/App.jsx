import { useState, createContext, useEffect } from 'react';
import TasksPage from './pages/TasksPage';
import { usePostTask } from './hooks/usePostTask';
import CreateTask from './pages/CreateTask';
import './styles/index.scss';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
export const AppContext = createContext(null);
import Layout from './utils/Layout';

function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);
  const [actions, setActions] = useState({
    addTask: (task) => {
      console.log('updating tasks with: ', task);
      setTodos((todos) => todos.concat({ title: task.title }));
    },
  });

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((response) => response.json())
      .then((json) => {
        setTodos(json);
        console.log('tasks in App.js: ', json);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <AppContext.Provider value={{ actions, todos }}>
      <div className='App'>
        <h1 className='App__greeting'>👋 Hi, Jonathan</h1>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='/' element={<TasksPage />} />
              <Route path='/create' element={<CreateTask />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </div>
    </AppContext.Provider>
  );
}

export default App;
