import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import CocktailList from './components/CocktailList';
import CocktailDetails from './components/CocktailDetails';
import Error from './components/Error';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<CocktailList />} />
        <Route path="/about" element={<About />} />
        <Route path="/cocktail/:id" element={<CocktailDetails />} />
        <Route path="*" element={<Error />} /> {/* Catch-all for non-existent routes */}
      </Routes>
    </>
  );
};

export default App;
