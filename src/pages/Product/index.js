import React, { useEffect, useState } from "react";
import { Wrapper, TextColored, Gallery } from "../../components/Common"
import { useParams} from "react-router-dom";
import { useProductDetails } from "../../utils/hooks/useProductDetails";
import  cart from "../../assets/cart.png"
import { StyledProduct } from "./styled"
import { GENERAL, TEXT_COLOR_TYPES } from "../../utils/constants";
import { Fragment } from "react/cjs/react.production.min";


function Product(){
    const { productId } = useParams();
    const { data : product, isLoading} = useProductDetails(productId);
    const [ stock, setStock ] = useState(GENERAL.PRODUCT_EMPTY)
    const [ quantity, seQuantity ] = useState(GENERAL.SINGLE_ELEMENT)

    const handleAddCart = () => { 
        if (stock >= GENERAL.PRODUCT_EMPTY){
            setStock((prevStock) => {
                return prevStock - GENERAL.SINGLE_ELEMENT
            })
        }
        
    }

    const handleControls = (operation) => { 
        if (quantity >= GENERAL.PRODUCT_EMPTY){
            seQuantity((prevQuantity) => {
                let result = prevQuantity;
                if (operation === 'rest') {
                    result =  prevQuantity > GENERAL.PRODUCT_EMPTY ? prevQuantity - GENERAL.SINGLE_ELEMENT : GENERAL.PRODUCT_EMPTY;
                } else {
                    result = prevQuantity < stock ? prevQuantity + GENERAL.SINGLE_ELEMENT : stock;
                }
                return result
            })
        }
    }   

    useEffect(()=> {
        if(product.stock){
            setStock(product.stock)
            console.log('initial', product.stock);
        }
        
    }, [product])

    return (

        <Fragment>
        {isLoading && 
            <Wrapper flex padding="100px">
                <TextColored color={TEXT_COLOR_TYPES.SECONDARY}>Loading...</TextColored>
            </Wrapper>
        }

        {!isLoading &&
            <StyledProduct>
                <Wrapper flex justify="space-between" className="product__container">
                    <Wrapper className="product_gallery">
                        <Gallery slides={product.images} />                
                    </Wrapper>
                    <Wrapper className="product_info">
                        <h1 className="product__title">{product.name}</h1>
                        <span className="product__price">${product.price}</span>
                        <p className="product__description">{product.short_description}</p>    
                        <Wrapper flex justify="start" className="product__add">
                            <div className="product__number">
                                <input readOnly={true} className="product__quantity" type="number" value={quantity}/>
                                <div className="product_quantity_button">
                                    <span onClick={() => { handleControls('add')} } className="product__quantity-controls">{"<"}</span>
                                    <span onClick={() => { handleControls('rest')} } className="product__quantity-controls">{">"}</span>
                                </div>
                            </div>
                            <button className={stock===GENERAL.PRODUCT_EMPTY ? "product__add-cart disabled":"product__add-cart"} onClick={handleAddCart} disabled={stock===GENERAL.PRODUCT_EMPTY ? true : false}>
                                <img  className="product__cart"  src={cart} alt="cart"/>
                            </button>                  
                        </Wrapper>
                        <Wrapper>
                            <label>Stock:</label> {stock}
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
                </Wrapper>                                  
            </StyledProduct>            

        }
        
        </Fragment>
 

    )
}
export { Product }