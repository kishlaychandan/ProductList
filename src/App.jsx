import { useEffect, useState } from 'react'
import style from "./App.module.css"
import ProductList from './component/ProductList/ProductList'
import Cart from './component/Cart/Cart'

function App() {
  const[item,setItem]=useState([
    {name:"product1",price:100,quantity:1},
    {name:"product2",price:200,quantity:1},
    {name:"product3",price:300,quantity:1},
    {name:"product4",price:400,quantity:1},
  ]);
  
  
  return (
    <>
    <div className={style.main}>
      <ProductList item={item} setItem={setItem}/>
      <Cart item={item} />
    </div>

    </>
  )
}

export default App;