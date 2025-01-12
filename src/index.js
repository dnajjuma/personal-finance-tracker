import React from 'react';
import ReactDOM from 'react-dom/client'; // Notice the updated import
import App from './App';
import './styles/Responsive.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
