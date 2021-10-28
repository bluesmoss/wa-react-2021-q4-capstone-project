import React from "react";
import PropTypes from 'prop-types';
import { StyledProductList } from "./styled"

function ProductList(props){
    return (
        <StyledProductList>
            {props.children}
        </StyledProductList>
    )
}

ProductList.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export { ProductList }