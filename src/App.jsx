import { useState } from 'react';
import TasksPage from './pages/TasksPage';
import CreateTask from './pages/CreateTask';
import './styles/index.scss';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './utils/Layout';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <h1 className='App__greeting'>👋 Hi, Jonathan</h1>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<TasksPage />} />
            <Route path='/create' element={<CreateTask />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
