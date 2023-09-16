import { useState } from 'react'
import './App.css'
// Importacion de BootStrap
import "bootstrap/dist/css/bootstrap.min.css"
// NavBar
import NavBar from './components/NavBar/NavBar'
import "./components/NavBar/NavBarStyle.css"
// Item List Container
import ItemListContainer from "./components/ItemList/ItemListContainer"
import "./components/ItemList/ItemListContainer.css"
// Loading Screen
import Loading from "./components/Loading/Loading"
import "./components/Loading/Loading.css"

function App() {
  
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <div>
      {isLoading ? (
        <Loading onLoadingComplete={handleLoadingComplete} />
      ) : (
        <div>
            <NavBar />
            <ItemListContainer greeting={"Welcome to my E-Commerce!"} />
        </div>
      )}
    </div>
  );
}

export default App
