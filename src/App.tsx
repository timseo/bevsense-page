import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  About,
  NotFound,
} from './pages'
import MainLayout from './layout';


const App: React.FC = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
