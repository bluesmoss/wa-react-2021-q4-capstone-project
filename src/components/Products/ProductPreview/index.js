import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { Button, TextColored, Wrapper } from "../../Common"
import { StyledProductPreview } from "./styled"
import { ELEMENT_SIZE, GENERAL, OPERATIONS } from "../../../utils/constants";
import { Link } from "react-router-dom";
import { CartButton } from "../CartButton";
import { useCartContext } from "../../../providers/Cart";

function ProductPreview({data, id}){
    const { setCartItems, setCurrentProduct } = useCartContext()
    const [ stock, setStock ] = useState(GENERAL.PRODUCT_EMPTY)

    const handleAddItem = () => {
        if (stock >= GENERAL.PRODUCT_EMPTY){
            setStock((prevStock) => {
                return prevStock - GENERAL.SINGLE_ELEMENT
            })
        }

        setCurrentProduct({id: id, data: data, quantity: GENERAL.SINGLE_ELEMENT , subtotal: data.price, operation: OPERATIONS.ADD})

        setCartItems((prevCartItems) => {
            return prevCartItems + GENERAL.SINGLE_ELEMENT
        })
        
    }

    useEffect(()=> {
        if(data.stock){
            setStock(data.stock)
        }
        
    }, [data])     

    return (
            <StyledProductPreview>
                <img src={data.mainimage.url} alt={data.mainimage.alt} className="product__main-image"/> 
                <div className="product__information">
                    <div className="product__name">{data.name}</div>
                    <div className="product__main-info">
                        <span>Category: {data.category.slug}</span>
                        <span>Price: <TextColored color={"SECONDARY"}>$</TextColored>{data.price}</span>
                    </div>
                    <Wrapper flex justify="space-evenly"  className="product__actions">
                        <CartButton stock={stock} handleAddCart={handleAddItem} />
                        <Link to={`/product/${id}`}>
                            <Button size={ELEMENT_SIZE.MD} className="product__details" >View details</Button>
                        </Link>
                    </Wrapper>
                </div>                               
            </StyledProductPreview>

    )
}

ProductPreview.propTypes = {
    data: PropTypes.object.isRequired,
};
  
ProductPreview.defaultProps = {
    data: {},
};

export { ProductPreview }