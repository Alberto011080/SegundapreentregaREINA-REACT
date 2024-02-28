import './style/App.css'
import React from 'react';
import  ItemCount  from './components/ItemCount'
import  Navbar  from './components/NavBar'
import  ItemListContainer  from './components/ItemListContainer'
import  Item  from './components/Item'

const App = () => {
  return (
    <>
      <Navbar />
      <ItemCount />
      <ItemListContainer greeting={"De la tierra media"} />
     
    </>
  );
}

export default App;


//<Test mensaje = {"Aprendiendo Calculo?"} />

//<Fetch/>