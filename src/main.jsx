import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeProvider.jsx'
import { CartProvider } from './context/CartProvider.jsx'

createRoot(document.getElementById('root')).render(
  //4. Wraping the App with Provider
  <BrowserRouter>
  <ThemeProvider>
    <CartProvider>
    <App />
    </CartProvider>
    </ThemeProvider>
  </BrowserRouter>,
)
