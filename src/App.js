import { useState, useEffect } from 'react';

import Home from './routes/Home';
import Detail from './routes/Detail';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename="/NomadCoders_3.ReactJS-Basics">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
