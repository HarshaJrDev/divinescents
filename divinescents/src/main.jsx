import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { StoreProvider } from './context/StoreContext';
import { AuthProvider } from './context/AuthContext';
import { Toaster } from 'sonner';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <StoreProvider>
        <BrowserRouter>
          <Toaster richColors position="top-center" />
          <App />
        </BrowserRouter>
      </StoreProvider>
    </AuthProvider>
  </React.StrictMode>
);
