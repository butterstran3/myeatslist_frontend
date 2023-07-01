import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Form from './components/form/Form';
import Home from './components/home/Home';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/review' element={<Form />}/>
      </Routes>
    </>
  );
}

export default App;
