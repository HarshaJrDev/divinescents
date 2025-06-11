// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20 p-4 bg-white">
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;
