import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx'
import Game from './pages/Game.jsx'

import GTAV from './pages/GTAV.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/gtav" element={<GTAV />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
