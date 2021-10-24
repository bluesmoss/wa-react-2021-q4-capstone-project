import React from "react";
import { TextGradient } from "../../Common/TextGradient";
import { Wrapper } from "../../Common/Wrapper";
import { StyledHeader } from "./styled"
import cart from "../../../assets/cart.png"
import search from "../../../assets/search.svg"



function Header(){

    return (
        <StyledHeader>
            <Wrapper className="header__logo">
                👽 <TextGradient color={"PRIMARY"} className="header__text">MOSAN.</TextGradient>
            </Wrapper>
            <Wrapper className="header__actions">
                <Wrapper className="header__search-wrapper">
                    <input 
                        className="header__search-input" 
                        placeholder="Type something to search..."
                    />
                    <img className="header__search-icon"  src={search} alt="search"/>
                </Wrapper>
                <img  className="header__cart"  src={cart} alt="cart"/>
            </Wrapper>            
        </StyledHeader>
    )
}
export { Header }