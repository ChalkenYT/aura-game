import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional: for styling
import App from './App'; // Import your App component

// Render your App into the root div
ReactDOM.render(
  <React.StrictMode>
    <App />  {/* This will display your App component */}
  </React.StrictMode>,
  document.getElementById('root')  // Make sure this matches the root div in index.html
);
