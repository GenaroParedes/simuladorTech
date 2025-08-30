import  Navbar  from './components/Navbar.jsx'
import  ItemListContainer  from './components/ItemListContainer.jsx'
import './App.css'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <ItemListContainer title={'Bienvenidos a TechStore'} parrafo={'Los mejores productos al mejor precio'}></ItemListContainer>
    </>
  )
}

export default App
