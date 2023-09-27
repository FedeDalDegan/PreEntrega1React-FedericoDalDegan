import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
// Pages
import Home from '../Pages/Home'
import Categories from "../Pages/Categories"
import About from "../Pages/About"
import Contact from "../Pages/Contact"
import Detail from "../pages/Detail"
// Importacion de BootStrap
import "bootstrap/dist/css/bootstrap.min.css"
// Loading Screen
import Loading from "./components/Loading/Loading"
import "./components/Loading/Loading.css"
// NavBar
import NavBar from './components/NavBar/NavBar'
import "./components/NavBar/NavBarStyle.css"
// Item List Container
import "./components/ItemList/ItemListContainer.css"
// Counter
import "./components/Counter/Counter.css"


function App() {

  const [loadingComplete, setLoadingComplete] = useState(false);

  const handleLoadingComplete = () => {
    setLoadingComplete(true);
  };

  return (
    <>
      <NavBar />
      {!loadingComplete ? (
        // Muestra el componente Loading mientras se está cargando
        <Loading onLoadingComplete={handleLoadingComplete} />
        ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:category" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detalle/:id" element={<Detail />} />
        </Routes>
      )}
    </>
  );
}

export default App