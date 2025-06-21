import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow pt-20 p-4 bg-white">
          <AppRoutes />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
