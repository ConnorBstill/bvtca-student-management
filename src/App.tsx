import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  { QueryClientProvider, QueryClient } from 'react-query';

import RegisterScreen from './pages/RegisterScreen/RegisterScreen';
import HomeScreen from './pages/HomeScreen/HomeScreen';
import './App.css';

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <div className='app-container'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<RegisterScreen />}></Route>

            <Route path='/home' element={<HomeScreen />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  )
}

export default App
