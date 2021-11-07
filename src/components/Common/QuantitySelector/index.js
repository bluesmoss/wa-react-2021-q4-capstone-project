import React from "react";
import PropTypes from 'prop-types';
import { StyledQuantitySelector } from './styled'

function QuantitySelector({quantity, handleControls}){

    return (
        <StyledQuantitySelector>
            <input readOnly={true} className="product__quantity" type="number" value={quantity}/>
            <div className="product_quantity_button">
                <span onClick={() => { handleControls('add')} } className="product__quantity-controls">{"<"}</span>
                <span onClick={() => { handleControls('rest')} } className="product__quantity-controls">{">"}</span>
            </div>
        </StyledQuantitySelector>
    )
}

QuantitySelector.propTypes = {
    quantity: PropTypes.number.isRequired,
    handleControls: PropTypes.func.isRequired,
};
  

export { QuantitySelector }