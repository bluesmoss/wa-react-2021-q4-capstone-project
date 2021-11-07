import React from "react";
import PropTypes from 'prop-types';
import { StyledCartButton } from './styled'
import { GENERAL } from "../../../utils/constants";
import  cart from "../../../assets/cart.png"

function CartButton({stock, handleAddCart}){

    return (
        <StyledCartButton>
            <button className={stock===GENERAL.PRODUCT_EMPTY ? "product__add-cart disabled":"product__add-cart"} onClick={handleAddCart} disabled={stock===GENERAL.PRODUCT_EMPTY ? true : false}>
                <img  className="product__cart" src={cart} alt="cart"/>
            </button>  
        </StyledCartButton>
    )
}

CartButton.propTypes = {
    stock: PropTypes.number.isRequired,
    handleAddCart: PropTypes.func.isRequired,
};
  

export { CartButton }