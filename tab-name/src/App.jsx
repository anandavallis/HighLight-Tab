
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Tabs from './components/Tabs';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/tab/home" replace />} />
        <Route path="/tab/:tabName" element={<Tabs />} />
      </Routes>
    </Router>
  );
};

export default App;
