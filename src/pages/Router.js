import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';

export const Router = () => {
  return (    
      <Routes>
        <Route path="/" element={<HomePage />} />    
      </Routes>   
  );
};
