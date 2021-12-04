import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Products from './Products';
import FilterComponent from './FilterComponent';
import { useEffect, useState } from 'react';
import productsData from './products.json';

function App() {
  const [displayProducts, setDisplayProducts]=useState([])
  const [update,setUpdate]=useState(0)
  useEffect(()=>{
    setDisplayProducts(productsData)
  },update)
  function handleProductChange(value){
    setDisplayProducts(value)
  }
  function handleUpdate(value){
    setUpdate(value)
  }
  // console.log(displayProducts)
  return (
    <div className="App">
      <Header/>
      <FilterComponent displayProducts={displayProducts} handleProductChange={handleProductChange} update={update} handleUpdate={handleUpdate}/>
      <Products products={displayProducts}/>
    </div>
  );
}

export default App;
