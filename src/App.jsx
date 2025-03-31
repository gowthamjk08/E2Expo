import './App.css';
import Home from '../pages/Home';
import Events from '../pages/Events';
import Expo from '../pages/Expo';
import Product from '../pages/Product';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
 
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/events" element = {<Events />} />
        <Route path="/expo" element = {<Expo />} />
        <Route path="/product" element = {<Product />} />
      </Routes>
    </BrowserRouter>

  </>
}

export default App
