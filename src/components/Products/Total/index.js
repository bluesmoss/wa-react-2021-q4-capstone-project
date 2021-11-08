import React from "react";
import PropTypes from 'prop-types';
import { StyledTotal } from './styled'
import { useCartContext } from "../../../providers/Cart";
import { Link } from "react-router-dom";
import { Button, Wrapper } from "../../Common";
import { ELEMENT_SIZE, GENERAL } from "../../../utils/constants";


function Total({checkout}){
    const { total } = useCartContext()

    return (
            <StyledTotal>
                <Wrapper className="total__wrapper">
                    <Wrapper className="total__title">
                        <span>Total:</span>
                        <span>{`$ ${total.toFixed(GENERAL.DECIMAL_TO_SHOW)}`}</span>
                    </Wrapper>
                    <Wrapper>
                        <Link className={checkout ? "hide": ""} to="/checkout">
                            <Button size={ELEMENT_SIZE.MD} className="total_checkout" >Proceed to checkout</Button>
                        </Link>
                        <Button className={!checkout ? "hide": "total_checkout"} size={ELEMENT_SIZE.MD}>Place order</Button>
                        <Link className={!checkout ? "hide": ""} to="/shopping-cart">
                            <Button size={ELEMENT_SIZE.MD} className="total_checkout" >Go back to shopping cart</Button>
                        </Link>                                                
                    </Wrapper>                
                </Wrapper>
                
            </StyledTotal>            
   
    )
}

Total.propTypes = {
    checkout: PropTypes.bool,
};


export { Total }