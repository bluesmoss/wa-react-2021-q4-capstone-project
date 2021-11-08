import React, {Fragment} from "react";
import { TextGradient, Wrapper } from "../../components/Common";
import { Total, Table } from "../../components/Products";
import { StyledCart } from "./styled"

function Cart(){

    return (
        <StyledCart>
            <Wrapper className="cart__wrapper" flexColumn>
                <TextGradient color={"PRIMARY"} fontSize="2em">Shopping cart</TextGradient>
                <Table></Table>
                <Total></Total>            
            </Wrapper>
        </StyledCart>
    )
}
export { Cart }