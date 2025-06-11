// pages/Home.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import CategoryCarousel from '../components/CategoryCarousel';
import ProductGridSection from '../components/ProductGrid';
import FeaturedCandle from '../components/FeaturedCandle';
import TestimonialCarousel from '../components/TestimonialCarousel';
import NewsletterSignup from '../components/NewsletterSignup';

const Home = () => {
  return (
    <>
      <HeroSection />
      <CategoryCarousel />
      <ProductGridSection />
      <FeaturedCandle />
      <TestimonialCarousel />
      <NewsletterSignup />
    </>
  );
};

export default Home;
