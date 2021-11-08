import React from "react";
import { StyledTotal } from './styled'
import { useCartContext } from "../../../providers/Cart";
import { Link } from "react-router-dom";
import { Button, Wrapper } from "../../Common";
import { ELEMENT_SIZE } from "../../../utils/constants";


function Total({stock, handleAddCart}){
    const { total } = useCartContext()

    return (
            <StyledTotal>
                <Wrapper className="total__wrapper">
                    <Wrapper className="total__title">
                        <span>Total:</span>
                        <span>{`$ ${total}`}</span>
                    </Wrapper>
                    <Wrapper>
                        <Link to="/checkout">
                            <Button size={ELEMENT_SIZE.MD} className="total_checkout" >Proceed to checkout</Button>
                        </Link>
                    </Wrapper>                
                </Wrapper>
                
            </StyledTotal>            
   
    )
}


export { Total }