import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notes from './pages/Notes';
import LoginRegister from './pages/LoginRegister';

function App() {
  return (
    <div id='app'>
      <div id='container'>
        <BrowserRouter>
          <Routes>
            <Route element={<Notes />} path='/'></Route>
            <Route element={<LoginRegister />} path='/login'></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
