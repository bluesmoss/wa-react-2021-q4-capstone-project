import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
  
const StyledProductList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 0px 30px;
    margin-top: 2em;
    margin-bottom: 2em;
    gap: 1rem;
    row-gap: 2em;
`;

ProductList.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

function ProductList(props){


    return (
        <StyledProductList>
            {props.children}
        </StyledProductList>
    )
}
export { ProductList }