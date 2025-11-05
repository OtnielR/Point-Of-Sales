import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './pages/home'
import Category from './pages/category';
import Products from './pages/products';
import Product from './pages/product';
import Users from './pages/users';
import Sales from './pages/sales';
import Sale from './pages/sale';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/categories' element={<Category></Category>}></Route>
          <Route path='/products' element={<Products></Products>}></Route>
          <Route path='/product/:id' element={<Product></Product>}></Route>
          <Route path='/users' element={<Users></Users>}></Route>
          <Route path='/sales' element={<Sales></Sales>}></Route>
          <Route path='/sale/:id' element={<Sale></Sale>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
