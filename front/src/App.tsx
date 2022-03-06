import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppProvider } from './hooks';
import { AppRoutes } from './routes';
import GlobalStyle from './styles/global';

export const App: React.FC = () => (
  <BrowserRouter>
    <AppProvider>
      <AppRoutes />
    </AppProvider>

    <ToastContainer />
    <GlobalStyle />
  </BrowserRouter>
);
