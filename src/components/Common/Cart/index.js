import React from "react";
import PropTypes from 'prop-types';
import cart from "../../../assets/cart.png"
import { StyledCart } from "./styled"
import { Link } from "react-router-dom";

function Cart(props){
    return (
        <Link to="/shopping-cart">
            <StyledCart className={props.className ? props.className : ''} >
                <img  className="header__cart"  src={cart} alt="cart"/>
                <span  className="header__badge" >0</span>
            </StyledCart>        
        </Link> 
    )
}

Cart.propTypes = {
    className: PropTypes.string,
};
  

export { Cart }