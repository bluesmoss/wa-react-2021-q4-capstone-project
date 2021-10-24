import React from "react";
import { LinkColored, TextColored, Wrapper} from "../../Common"
import { StyledFooter } from "./styled"

function Footer(){

    return (
        <StyledFooter>
            <Wrapper>
                Ecommerce created during Wizeline’s Academy React Bootcamp
            </Wrapper>
            <Wrapper>
                Made with 💙 by <LinkColored url="https://github.com/bluesmoss" newPage>@bluesmoss</LinkColored> 2<TextColored color={"PRIMARY"}>K</TextColored>21
            </Wrapper>
        </StyledFooter>
    )
}

export { Footer }