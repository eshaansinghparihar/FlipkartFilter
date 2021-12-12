import React , {useState , useEffect} from "react";
import './Cart.css'

function Cart({cart,handleQtyUpdate, handleSaveForLaterUpdate, UpdateDeleteItem}){
    const [cartState,setCart]=useState(cart)
    const [update,setUpdate]=useState(0)
    // const [bill, setBill]=useState(0)
    useEffect(()=>{
        setCart(cart)
    },update)
    var billAmt=0
    const cartBilling=()=>cartState.map(product=>{
        billAmt = billAmt + (product.qty * product.price)
    })
    function cartBillFinal(){
        cartBilling()
        return(
            <div className="Bill">
                <div className="billCard">
                {`₹${billAmt}.00`}
                <button className="payNow">Pay Now</button>
                </div>
            </div>   
        )
    }
    const cartItem=()=>cartState.map((product, i)=>{
            function handleSelectChange(event)
            {
                handleQtyUpdate(cart, i, event.target.value)
                setUpdate(update+1)
            }
            function handleSaveForLater(){
                handleSaveForLaterUpdate(cart , i)
                setUpdate(update+1)
            }
            function handleDelete(){
                UpdateDeleteItem(cart , i)
                setUpdate(update+1)
            }
            console.log(product)
            // if(product.saveForLater)
            // {
                return(
                    <div className="productCard">
                        <img className="productImg" src={product.imgUrl}/>
                        <div className="desc">
                        <div className="name">{product.name}</div>
                        <div className="brand">{product.brand}</div>
                        <div className="price">₹{product.price}</div>
                        <select value={product.qty} onChange={handleSelectChange}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        </select>
                        {/* <button onClick={handleSaveForLater}>Save For Later</button> */}
                        <button onClick={handleDelete}>Remove Item</button>
                        </div>
                    </div>
                )
            // }
            
        })
    return(
        <div>
            {cartBillFinal()}
            <div className="productDescription">
            {cartItem()}
            </div>
        </div>
    )
}
export default Cart;