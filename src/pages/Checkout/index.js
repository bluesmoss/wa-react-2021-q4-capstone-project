import React, {Fragment} from "react";
import { TextGradient, Wrapper } from "../../components/Common";
import { Total, Table, Form } from "../../components/Products";
import { useCartContext } from "../../providers/Cart";
import { GENERAL } from "../../utils/constants";
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
                    <Form></Form>
                    <Total checkout={true}></Total>                  
                </Fragment>
            }
         
            </Wrapper>
        </StyledCheckout>
    )
}
export { Checkout }