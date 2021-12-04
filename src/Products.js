import React, { useState } from "react";
import './Products.css';


function Products({products}){
    

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