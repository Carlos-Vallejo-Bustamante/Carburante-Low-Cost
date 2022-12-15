import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import AuthProvider from './context/auth.context';
import { DataProvider } from './context/data.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <AuthProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </AuthProvider>
  </Router>
);
