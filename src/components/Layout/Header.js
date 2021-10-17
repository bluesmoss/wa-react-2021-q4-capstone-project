import React from "react";
import styled from "styled-components";
import { TextGradient } from "../Common/TextGradient";
import { Wrapper } from "../Common/Wrapper";
import { COLORS } from "../../utils/constants";
import cart from "../../assets/cart.png"
import search from "../../assets/search.svg"


const StyledHeader = styled.header`
  height: 40px;
  position: sticky;
  top: 0;
  display: flex;
  padding: 10px 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${COLORS.PRIMARY};

    .header__logo{

        font-weight: bold;
        font-size: 1.7em;

        :hover > .header__text::before{
            content: "Weird is good";
            background: linear-gradient(to left, ${COLORS.TERTIARY},  ${COLORS.SECONDARY});
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;    
        }  
    }

    .header__search{
        height: 24px;
        width: 24px;
    }
    
    .header__cart{
        height: 32px;
        width: 32px;
    }
    
    .header__actions{
        display: flex;
        align-items: center;
        gap: 1rem;
    }

`;

function Header(){

    return (
        <StyledHeader>
            <Wrapper className="header__logo">
                👽 <TextGradient color={"PRIMARY"} className="header__text">MOSAN.</TextGradient>
            </Wrapper>
            <Wrapper className="header__actions">
                 <img className="header__search"  src={search} alt="search"/>
                 <img  className="header__cart"  src={cart} alt="cart"/>
            </Wrapper>            
        </StyledHeader>
    )
}
export { Header }