import { useState } from 'react';
import RegisterScreen from './pages/RegisterScreen/RegisterScreen';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='app-container'>
      <RegisterScreen />
    </div>
  )
}

export default App
