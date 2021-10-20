import React from "react";
import styled from "styled-components";
import {TextColored} from "../Common/TextColored"
import {Wrapper} from "../Common/Wrapper"
import {Link} from "../Common/Link"
import { COLORS } from "../../utils/constants";

const StyledFooter = styled.footer`
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-top: 2px solid ${COLORS.SECONDARY};
`;

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