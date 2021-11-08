import React from "react";
import PropTypes from 'prop-types';
import { StyledQuantitySelector } from './styled'
import { GENERAL } from "../../../utils/constants";

function QuantitySelector({quantity, handleControls, productId, stock}){

    return (
        <StyledQuantitySelector>
            <input readOnly={true} className="product__quantity" type="number" value={quantity}/>
            <div className="product_quantity_button">
                <span onClick={() => { handleControls('add', productId)} } className={(quantity === stock) ? "product__quantity-controls disable" : "product__quantity-controls"}>{"<"}</span>
                <span onClick={() => { handleControls('rest', productId)} } className={(quantity === GENERAL.PRODUCT_EMPTY) ? "product__quantity-controls disable" : "product__quantity-controls"}>{">"}</span>
            </div>
        </StyledQuantitySelector>
    )
}

QuantitySelector.propTypes = {
    quantity: PropTypes.number.isRequired,
    handleControls: PropTypes.func.isRequired,
    productId: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired
};
  

export { QuantitySelector }