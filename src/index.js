import React from 'react';
import ReactDOM from 'react-dom/client';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css';
import App from './App';
import GlobalProvider from './Components/Context/GlobalProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <GlobalProvider>
    <App />
  </GlobalProvider>
  </React.StrictMode>
);


