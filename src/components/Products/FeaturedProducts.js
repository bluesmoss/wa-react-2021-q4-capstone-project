import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import { ProductList } from "./ProductList"
import { ProductOverview } from "./ProductOverview"
import {TextGradient} from "../Common/TextGradient"
  
const StyledFeaturedProduct = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2em;
`;

FeaturedProducts.propTypes = {
    products: PropTypes.array,
};
  
FeaturedProducts.defaultProps = {
    products: [],
};

function FeaturedProducts({products}){
    return (
            <StyledFeaturedProduct>
                <TextGradient color={"PRIMARY"} fontSize="2em">Featured products</TextGradient>
                <ProductList>
                    {products.map((product, index) => (
                        <ProductOverview 
                            key={product.id}
                            data={product.data}
                        />                           
                    ))}                    
                </ProductList>
            </StyledFeaturedProduct>

    )
}
export { FeaturedProducts }