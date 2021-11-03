import React from "react";
import { TextGradient, Wrapper} from "../../Common"
import { StyledHeader } from "./styled"
import cart from "../../../assets/cart.png"
import search from "../../../assets/search.svg"
import { Link } from "react-router-dom";
import { useHeaderContext } from "../../../providers/Header";



function Header(){
    const { setOpenModal} = useHeaderContext()

    const handleOpenSearch = () => {
        setOpenModal(true)
    };

    return (
        <StyledHeader>
            <Link to="/">
                <Wrapper className="header__logo">
                    👽 <TextGradient color={"PRIMARY"} className="header__text">MOSAN.</TextGradient>
                </Wrapper>                
            </Link>
            <Wrapper className="header__actions">
                <Wrapper className="header__search-wrapper">
                    <button className="header__search-button" onClick={handleOpenSearch}>
                        <img className="header__search-icon"  src={search} alt="search"/>
                    </button>
                </Wrapper>
                <img  className="header__cart"  src={cart} alt="cart"/>
            </Wrapper>            
        </StyledHeader>
    )
}
export { Header }