import React, {useState} from "react";
import { TextGradient, Wrapper} from "../../Common"
import { StyledHeader } from "./styled"
import cart from "../../../assets/cart.png"
import search from "../../../assets/search.svg"
import { Link, Redirect } from "react-router-dom";



function Header(){

    const [searchItem, setSearchItem] = useState('')
    const [redirect, setRedirect] = useState(false);

    const onSearch = (event) => {
        const valueToSearch = event.target.value.trim();
        setSearchItem(valueToSearch)
    };

    const handleSearch = () => {
        setRedirect(true)
    };

    if (redirect) {
        return (
            <Redirect
            to={{
                pathname: "/search",
                search: `?q=${searchItem}`,
            }}
            />
        );
    }    

    return (
        <StyledHeader>
            <Link to="/">
                <Wrapper className="header__logo">
                    👽 <TextGradient color={"PRIMARY"} className="header__text">MOSAN.</TextGradient>
                </Wrapper>                
            </Link>
            <Wrapper className="header__actions">
                <Wrapper className="header__search-wrapper">
                    <input 
                        className="header__search-input" 
                        placeholder="Type something to search..."
                        onChange={onSearch}
                    />
                    <button className="header__search-btn" onClick={handleSearch}>
                        <img className="header__search-icon"  src={search} alt="search"/>
                    </button>
                </Wrapper>
                <img  className="header__cart"  src={cart} alt="cart"/>
            </Wrapper>            
        </StyledHeader>
    )
}
export { Header }