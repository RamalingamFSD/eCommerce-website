import React from "react";
// import ApiData from "./ApiData";
import './App.css'

const Cart = (props) => {
    const { cartBill, img, proTitle, price, send } = props;
    return (
        <div className="cart-container">
            <div className="cart" >
                <img src={img} />
                <div className="price">
                    <h4>{proTitle}</h4>
                    <h3>₹{price}</h3>
                    <p onClick={() => cartBill(props)}><button onClick={() => send()}>Buy Now</button></p>
                </div>
            </div>
        </div>

    )
}

export default Cart;