import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './pages/home'
import Category from './pages/category';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/add-category' element={<Category></Category>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
