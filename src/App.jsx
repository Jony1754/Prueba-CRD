import { useState } from 'react';
import TasksPage from './pages/TasksPage';
import './styles/index.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <h1 className='App__greeting'>👋 Hi, Jonathan</h1>
      {/* <p className='App__message'>Complete some tasks</p> */}
      <TasksPage />
    </div>
  );
}

export default App;
