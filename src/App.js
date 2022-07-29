import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import { UserProvider } from './contexts/UserContext';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout';
import Cart from './components/Cart';

function App() {
  return (
    <UserProvider>
    <ThemeProvider>
      <BrowserRouter>
      <Routes>
      <Route path ='/' element={<Products/>}/>
        <Route index element={<Products/>}/>
        <Route path = 'details' element={<ProductDetails/>}/>
        <Route path = 'cart' element={<Cart/>} />
        <Route path = 'checkout' element={<Checkout/>}/>
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </UserProvider>
  );
}

export default App;
