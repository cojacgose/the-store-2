import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import { UserProvider } from './contexts/UserContext';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout';
import Cart from './components/Cart';
import HeaderFooter from './components/HeaderFooter';

function App() {
  return (
    <div>
    <UserProvider>
    <ThemeProvider>
      <BrowserRouter>
      <Routes>
        <Route path ='/' element={<HeaderFooter/>}>
          <Route index element={<Products/>}></Route>
          <Route path = 'productdetails/:id' element={<ProductDetails/>}></Route>
          <Route path = 'cart' element={<Cart/>} ></Route>
          <Route path = 'checkout' element={<Checkout/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </UserProvider>
    </div>
  );
}

export default App;
