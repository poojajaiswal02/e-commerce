import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Layout/Header';
import Home from './Components/Home';
import Card from './Components/Card';
import ErrorPage from './Components/ErrorPage';
import ProductDetails from './Components/ProductDetails';



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header/>}>
        <Route index element={<Home/>}/>
        <Route path='product_details/:productId' element={<ProductDetails/>} />
        <Route path='card' element={<Card/>} />
      </Route>
        <Route path='*' element={<ErrorPage/>} />
        
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
