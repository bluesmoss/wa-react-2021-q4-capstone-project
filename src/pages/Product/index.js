import React, {Fragment,useEffect} from "react";
import { Slider, Button, Wrapper, TextColored } from "../../components/Common"
import { ELEMENT_SIZE, QUERY } from "../../utils/constants";
import { Link, useParams} from "react-router-dom";
import { useProductDetails } from "../../utils/hooks/useProductDetails";
import  cart from "../../assets/cart.png"


function Product(){
    const { productId } = useParams();
    const { data : product } = useProductDetails(productId);

   
   

    useEffect(() => {
        if(product){
            console.log('objedsct', product);
        }
    })

     
    return (
        <Fragment>
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
                    : <TextColored>No tags found</TextColored>
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
                    : <li><TextColored>No spec found</TextColored></li>
                }   
                </ul>

            </Wrapper>                                           
        </Fragment>
    )
}
export { Product }