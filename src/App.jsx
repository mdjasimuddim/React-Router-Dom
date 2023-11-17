import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderPage from './pages/HeaderPage'
import ProductPage from './pages/ProductPage';
import ProfilePage from './pages/ProfilePage';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<HeaderPage />} />
          <Route path = "/product/:id/:name" element = {<ProductPage />} />
          <Route path = "/profile/:facebookId/:youtubeId" element = {<ProfilePage />} />
          <Route path = "*" element = {<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App