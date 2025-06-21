
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Gifts from '../pages/Gifts'
import ProfileSection from '../pages/ProfileSection'
import ProductDetails from '../pages/ProductDetails'
import Candles from '../pages/Candles'

import Home from '../pages/Home';
import Cart from '@/pages/Cart';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gifts" element={<Gifts />} />
      <Route path="/account" element={<ProfileSection />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/gift/:id" element={<ProductDetails />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Candles" element={<Candles />} />
    </Routes>
  );
};

export default AppRoutes;
