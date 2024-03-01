import React from 'react'
import Navbar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount';

  function App() {
  return (
    <div>
      <ItemCount />
      <Navbar />
      <ItemListContainer />
    </div>
  )
}

export default  App;

//<Test mensaje = {"Aprendiendo Calculo?"} />

//<Fetch/>