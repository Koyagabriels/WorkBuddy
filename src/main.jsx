import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// This finds the "root" div in your index.html and puts your App inside it
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
