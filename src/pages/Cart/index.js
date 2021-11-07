import React, {Fragment} from "react";
import { TextGradient, Wrapper } from "../../components/Common";
import { Table } from "../../components/Products/Table";
import { StyledCart } from "./styled"

function Cart(){

    return (
        <StyledCart>
            <Wrapper className="cart__wrapper" flexColumn>
                <TextGradient color={"PRIMARY"} fontSize="2em">Shopping cart</TextGradient>
                <Table></Table>                
            </Wrapper>
        </StyledCart>
    )
}
export { Cart }