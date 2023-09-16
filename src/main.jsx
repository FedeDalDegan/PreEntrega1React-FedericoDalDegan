import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "nes.css/css/nes.min.css"; // Importacion de NES CSS
import "bootstrap/dist/css/bootstrap.min.css" // IMPORTAMOS BOOTSTRAP

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
