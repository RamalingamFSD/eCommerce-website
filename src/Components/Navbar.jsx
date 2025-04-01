import React from "react";
import { IoSearchCircle } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";



const Navbar = (e) => {
    return (
        <div className="navbar">
            <h3>Shopping Cart</h3>
            <div className="middle">
                <input type="text" className="search" placeholder="Search" />
                <span className="search_icon"><IoSearchCircle /></span>
            </div>
            <div>
                <span onClick={e.b} className="cart-icon"><FaShoppingCart /><sup>{e.c}</sup></span>
            </div>
        </div>

    )
}

export default Navbar;