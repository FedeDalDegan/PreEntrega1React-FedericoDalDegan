import './App.css'
import "bootstrap/dist/css/bootstrap.min.css" // Importacion de BootStrap
import NavBar from './components/NavBar/NavBar' // NavBar
import "./components/NavBar/NavBarStyle.css" // NavBar CSS
import ItemListContainer from "./components/ItemList/ItemListContainer"
import "./components/ItemList/ItemListContainer.css"

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Welcome to my E-Commerce!" />
    </div>
  )
}

export default App
