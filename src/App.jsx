import './App.css'
import { useState } from 'react'
import 'toastr/build/toastr.css';
import Loading from "./components/Loading/Loading"
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import CartContextProvider from './context/cartContext/cartContextProvider'
import UserContextProvider from './context/userContext/userContextProvider'
import NavigationComponent from './components/Navigation/NavigationComponent'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  const handleLoadingComplete = () => {
    setLoadingComplete(true);
  };

  return (
    <div>
      <CartContextProvider >
        <UserContextProvider>
          <NavBar />
            {!loadingComplete ? (
              <Loading onLoadingComplete={handleLoadingComplete} />
              ) : (
                <NavigationComponent />
                )}
          <Footer />
        </UserContextProvider>
      </CartContextProvider >
    </div>
  );
}

export default App