import React from "react";
import PropTypes from 'prop-types';
import { ProductList } from "../ProductList"
import { ProductPreview } from "../ProductPreview"
import { TextGradient } from "../../Common"
import { StyledFeaturedProduct } from "./styled"

function FeaturedProducts({products}){
    return (
        <StyledFeaturedProduct>
            <TextGradient color={"PRIMARY"} fontSize="2em">Featured products</TextGradient>
            <ProductList>
                {products.map((product, index) => (
                    <ProductPreview 
                        key={product.id}
                        data={product.data}
                    />                           
                ))}                    
            </ProductList>
        </StyledFeaturedProduct>

    )
}

FeaturedProducts.propTypes = {
    products: PropTypes.array,
};
  
FeaturedProducts.defaultProps = {
    products: [],
};

export { FeaturedProducts }