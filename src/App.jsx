import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import CartPage from "./pages/cartPage";

function App() {
  // 5. Using the context
  const {theme, themeToggle} = useContext(ThemeContext); // Destructuring 

  return (
    <>
    <div className={theme === 'light'?'bg-light text-dark min-vh-100': 'bg-dark text-light min-vh-100'}>
      <Navbar />
      <div>
        <button onClick={themeToggle}>Toggle</button>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path ="/cart" element={<CartPage/>} />
      </Routes>
      </div>
    </>
  );
}

export default App;
