import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './pages/home'
import Category from './pages/category';
import Products from './pages/products';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/categories' element={<Category></Category>}></Route>
          <Route path='/products' element={<Products></Products>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
