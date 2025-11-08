import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './pages/home'
import Category from './pages/category';
import Products from './pages/products';
import Product from './pages/product';
import Users from './pages/users';
import Sales from './pages/sales';
import Sale from './pages/sale';
import Login from './pages/login';
import NotFound from './pages/not-found';
import ProctectedRoute from './components/proctected-route';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <ProctectedRoute>
              <Home></Home>
            </ProctectedRoute>}>
          </Route>
          <Route path='/categories' element={
            <ProctectedRoute>
              <Category></Category>
            </ProctectedRoute>
          }></Route>
          <Route path='/products' element={
            <ProctectedRoute>
              <Products></Products>
            </ProctectedRoute>
          }></Route>
          <Route path='/product/:id' element={
            <ProctectedRoute>
              <Product></Product>
            </ProctectedRoute>
          }></Route>
          <Route path='/users' element={
            <ProctectedRoute>
              <Users></Users>
            </ProctectedRoute>}>
          </Route>
          <Route path='/sales' element={
            <ProctectedRoute>
              <Sales></Sales>
            </ProctectedRoute>}>
          </Route>
          <Route path='/sale/:id' element={
            <ProctectedRoute>
              <Sale></Sale>
            </ProctectedRoute>} ></Route>
          <Route path='/login' element={<Login></Login>}></Route>

          <Route path="*" element={<NotFound></NotFound>}>
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
