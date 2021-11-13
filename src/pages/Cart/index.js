import React, {Fragment} from "react";
import { Link } from "react-router-dom";
import { Button, TextGradient, Wrapper } from "../../components/Common";
import { Total, Table } from "../../components/Products";
import { useCartContext } from "../../providers/Cart";
import { ELEMENT_SIZE, GENERAL } from "../../utils/constants";
import { StyledCart } from "./styled"

function Cart(){

    const { cartItems } = useCartContext()

    return (
        <StyledCart>
            <Wrapper className="cart__wrapper" flexColumn>
                <TextGradient color={"PRIMARY"} fontSize="2em">Shopping cart</TextGradient>
                {
                    (cartItems > GENERAL.PRODUCT_EMPTY) && 
                    <Fragment>
                        <Table></Table>
                        <Total></Total>                   
                    </Fragment>
                }

                {
                    (cartItems === GENERAL.PRODUCT_EMPTY) && 
                    <Wrapper className="cart__empty" flexColumn justify="center">
                        <TextGradient color={"PRIMARY"} fontSize="2em">Your cart is currently empty</TextGradient>
                        <Link to="/Products">
                            <Button size={ELEMENT_SIZE.MD} className="total_checkout" >Return to products</Button>
                        </Link>
                    </Wrapper>                                  
                }



         
            </Wrapper>
        </StyledCart>
    )
}
export { Cart }