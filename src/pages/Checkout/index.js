import React, {Fragment} from "react";
import { Link } from "react-router-dom";
import { Button, TextGradient, Wrapper } from "../../components/Common";
import { Total, Table } from "../../components/Products";
import { useCartContext } from "../../providers/Cart";
import { ELEMENT_SIZE, GENERAL } from "../../utils/constants";
import { StyledCheckout } from "./styled"

function Checkout(){

    const { cartItems } = useCartContext()
    return (
        <StyledCheckout>
            <Wrapper className="checkout__wrapper" flexColumn>
            <TextGradient color={"PRIMARY"} fontSize="2em">Checkout</TextGradient>
            {
                (cartItems > GENERAL.PRODUCT_EMPTY) && 
                <Fragment>
                    <Table checkout={true}></Table>
                    <Total></Total>                   
                </Fragment>
            }


         
            </Wrapper>
        </StyledCheckout>
    )
}
export { Checkout }