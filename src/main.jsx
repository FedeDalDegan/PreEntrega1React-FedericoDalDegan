import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "nes.css/css/nes.min.css"; // Importacion de NES CSS
import "bootstrap/dist/css/bootstrap.min.css" // IMPORTAMOS BOOTSTRAP
import { BrowserRouter } from 'react-router-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChZgHPm3Z9kaAWEBjxmNn0wA3Ic9tXAUw",
  authDomain: "final-project-e72bd.firebaseapp.com",
  projectId: "final-project-e72bd",
  storageBucket: "final-project-e72bd.appspot.com",
  messagingSenderId: "236504130397",
  appId: "1:236504130397:web:830c2a12af53f4393c3eb4"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <App />
    </BrowserRouter>
  </React.StrictMode>,
)
