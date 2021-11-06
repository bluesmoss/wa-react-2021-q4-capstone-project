import React from "react";
import { Wrapper, TextColored, Gallery } from "../../components/Common"
import { useParams} from "react-router-dom";
import { useProductDetails } from "../../utils/hooks/useProductDetails";
import  cart from "../../assets/cart.png"
import { StyledProduct } from "./styled"
import { TEXT_COLOR_TYPES } from "../../utils/constants";
import { Fragment } from "react/cjs/react.production.min";


function Product(){
    const { productId } = useParams();
    const { data : product, isLoading} = useProductDetails(productId);
    return (

        <Fragment>
        {isLoading && 
            <Wrapper flex padding="100px">
                <TextColored color={TEXT_COLOR_TYPES.SECONDARY}>Loading....</TextColored>
            </Wrapper>
        }

        {!isLoading &&
            <StyledProduct>
                <Wrapper className="product_gallery">
                    <Gallery slides={product.images} />                
                </Wrapper>
                <Wrapper className="product_info">
                    <Wrapper>
                        <label>Name:</label> {product.name}
                    </Wrapper>
                    <Wrapper>
                        <label>Price:</label> {product.price}
                    </Wrapper>
                    <Wrapper>
                        <label>SKU:</label> {product.sku}
                    </Wrapper>
                    <Wrapper>
                        <label>Category:</label> {product.category?.slug}
                    </Wrapper>
                    <Wrapper>
                        <label>Tags: </label> 
                        {
                        product.tags?.length
                            ? 
                            
                            product.tags.map(tag => (
                                <li key={tag}>{tag}</li>
                                ))
                            : <TextColored color={TEXT_COLOR_TYPES.SECONDARY}>No tags found</TextColored>
                        }                
                    </Wrapper>
                    <Wrapper>
                        <label>Description:</label> <p>{product.short_description}</p>    
                    </Wrapper>
                    <Wrapper>
                        <label>Items to be added:</label>
                        <input type="number"/>
                        <button className="product__add-cart">
                                    <img  className="product__cart"  src={cart} alt="cart"/>
                        </button>                  
                    </Wrapper>
                    <Wrapper>
                        <label>Spec:</label>
                        <ul>
                        {
                        product.specs?.length
                            ? 
                            
                            product.specs.map( (spec, index) => (
                                <li key={`spec${index}`}>{spec.spec_name} :  {spec.spec_value}</li>
                                ))
                            : <li><TextColored key="no-items" color={TEXT_COLOR_TYPES.SECONDARY}>No spec found</TextColored></li>
                        }   
                        </ul>

                    </Wrapper>                    
                </Wrapper>                                       
            </StyledProduct>            

        }
        
        </Fragment>
 

    )
}
export { Product }