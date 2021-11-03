import React, { useState } from "react";
import { StyledSearch } from './styled'
import { Wrapper } from "../Wrapper"
import search from "../../../assets/search_modal.svg"
import { useHeaderContext } from "../../../providers/Header";
import { Redirect } from "react-router";

function Search(){

    const { searchValue, setSearchValue} = useHeaderContext()
    const [redirect, setRedirect] = useState(false);
    const [input, setInput] = useState(false);

    const onSearch = (event) => {
        const valueToSearch = event.target.value.trim();
        setInput(valueToSearch)
    };


    const handleSearch = () => {
        setSearchValue(input)
        setRedirect(true)
    };

    if (redirect) {
        return (
            <Redirect
            exact
            to={{
                pathname: "/search",
                search: `?q=${searchValue}`,
            }}
            />
        );
    }   

    return (
        <StyledSearch>
            <Wrapper flexColumn>
                <label className="search__label">Type what you are searching for:</label>
                <Wrapper flex>
                    <input className="search__input" placeholder="Search for products..." type="text" onChange={onSearch}/>
                    <button className="search__button" onClick={handleSearch}>
                        <img className="header__search-icon"  src={search} alt="search"/>
                    </button>
                </Wrapper>
            </Wrapper>

        </StyledSearch>
    )
}

export { Search }