import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notes from './pages/Notes';
import LoginRegister from './pages/LoginRegister';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Notes />} path='/'></Route>
          <Route element={<LoginRegister />} path='/login'></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
