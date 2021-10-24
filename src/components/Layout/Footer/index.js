import React from "react";
import {TextColored} from "../../Common/TextColored"
import {Wrapper} from "../../Common/Wrapper"
import {Link} from "../../Common/Link"
import { StyledFooter } from "./styled"

function Footer(){

    return (
        <StyledFooter>
            <Wrapper>
                Ecommerce created during Wizeline’s Academy React Bootcamp
            </Wrapper>
            <Wrapper>
                Made with 💙 by <Link url="https://github.com/bluesmoss" newPage>@bluesmoss</Link> 2<TextColored color={"PRIMARY"}>K</TextColored>21
            </Wrapper>
        </StyledFooter>
    )
}

export { Footer }