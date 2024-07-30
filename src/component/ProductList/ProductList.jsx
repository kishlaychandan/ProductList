import React from 'react'
import style from "./ProductList.module.css"
function ProductList({item,setItem}) {

    function increase(index){
        let temp=[...item];
        let res=temp.map((product,id)=>{
            if(id===index){
                product.quantity=product.quantity+1
            }
            return product;
        })
        setItem(res);

    }

    function decrease(index){  
        let temp=[...item];
        let res=temp.filter((product,id)=>{
            if(id===index){
                if(product.quantity===1) return false;
                if(product.quantity>1) product.quantity=product.quantity-1;
            }
            return product;
        })
        setItem(res);
    }

  return (
    <>
    <div className={style.product}>
        <h1>product</h1>
        {item.map((item,index)=>{
            return(
                <>
                <div key={index} className={style.card}>
                    <h3>{item.name}</h3>
                    <h3>{item.price}</h3>
                    <div className={style.quantity}>
                        <button onClick={()=>increase(index)}>+</button>
                        <h3>{item.quantity}</h3>
                        <button onClick={()=>decrease(index)}>-</button>
                    </div>
                </div>
                </>
            )
        })}
    </div>
    </>
  )
}

export default ProductList