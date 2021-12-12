import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Products from './Products';
import FilterComponent from './FilterComponent';
import { useEffect, useState } from 'react';
import productsData from './products.json';
import Cart from './Cart';
import { Switch, Route, Redirect ,BrowserRouter} from 'react-router-dom';

function App() {
  const [displayProducts, setDisplayProducts]=useState([])
  const [cart,setCart]=useState([])
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
  function handleQtyUpdate(array,index, newValue){
    var cartDuplicate=array
    cartDuplicate[index].qty=newValue
    setCart(cartDuplicate)
  }
  function handleSaveForLaterUpdate(array, index)
  {
    var cartDuplicate=array
    cartDuplicate[index].savedForLater=!cartDuplicate[index].savedForLater
    setCart(cartDuplicate)
  }
  function handleCartUpdate(cartItem){
    var cartDuplicate=cart
    cartItem.savedForLater=false
    cartItem.qty="1"
    cartDuplicate.push(cartItem)
    setCart(cartDuplicate)
  }
  function UpdateDeleteItem(array, index)
  {
    var cartDuplicate=array
    if(cartDuplicate.length>1)
    cartDuplicate.splice(index,1)
    else
    cartDuplicate.pop()
    setCart(cartDuplicate)
  }
  // console.log(displayProducts)
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
      <Route exact path="/" >
      <Header/>
      <FilterComponent displayProducts={displayProducts} handleProductChange={handleProductChange} update={update} handleUpdate={handleUpdate}/>
      <Products cart={cart} products={displayProducts} handleCartUpdate={handleCartUpdate} update={update} handleUpdate={handleUpdate}/>
      </Route>
      <Route exact path="/cart">
      <Header/>
      <Cart cart={cart} handleQtyUpdate={handleQtyUpdate} handleSaveForLaterUpdate={handleSaveForLaterUpdate} UpdateDeleteItem={UpdateDeleteItem}/>
      </Route>
      <Redirect to="/" />
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
