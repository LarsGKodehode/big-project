// Libraries
import React from 'react'
import ReactDOM from 'react-dom/client'

// CSS
import './index.css'

// Components
import App from './App'


// App
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);