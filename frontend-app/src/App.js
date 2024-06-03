import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AnimeSlider from './components/AnimeSlider';
import AppNavbar from './components/Header'; 
import Footer from './components/Footer';
import './assets/scss/app.scss'; 

function App() {
  return (
    <div id="root">
      <AppNavbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<AnimeSlider />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
