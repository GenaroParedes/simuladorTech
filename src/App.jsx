import  NavbarSecond  from './components/NavbarSecond.jsx'
import  ItemListContainer  from './components/ItemListContainer.jsx'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error.jsx';

function App() {
  return (
    <BrowserRouter> 
      <NavbarSecond/>
      <Routes>
        <Route path='/' element={<ItemListContainer mensaje={'Bienvenidos a TechStore'}/>}/>
        <Route path='/category/:type' element={<ItemListContainer mensaje='Estas en la categoria: '/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      
      
    </BrowserRouter>
  )
}

export default App
