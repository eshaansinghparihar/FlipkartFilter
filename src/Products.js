import React, { useState } from "react";
import './Products.css';
import { useHistory } from "react-router-dom";


function Products({cart, products,handleCartUpdate , handleUpdate , update}){
    const history = useHistory();
    function addtoCart(item){
        
        handleCartUpdate(item)
        handleUpdate(update+1)
        let path = `cart`; 
        history.push(path);
    }

    const displayProduct=()=>products.map(product=>{
            return(
                
                <div className="productCard">
                    <img className="productImg" src={product.imgUrl}/>
                    <div className="brand">{product.brand}</div>
                    <div className="name">{product.name}</div>
                    <div className="price">₹{product.price}</div>
                    <div className="sizeDiv">
                    {product.sizes.map(size=>{
                        return(
                        <div className="size">{size}</div>
                        )
                    })}
                    {cart.some(item => (item.name === product.name))?<button>Added To Cart</button>:<button onClick={()=>addtoCart(product)}>Add To Cart</button>}
                    </div>
                </div>
            )
        })

return(
    <div className="products">
        <div className="productCards">
        {displayProduct()}
        </div>
    </div>
)
}
export default Products;