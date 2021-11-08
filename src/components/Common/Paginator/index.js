import React from "react";
import { StyledPaginator } from './styled'
import { Wrapper } from "..";
import { useProductsContext } from "../../../providers/Products";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { GENERAL } from "../../../utils/constants"

function Paginator(){
    const { pathname } = useLocation();

    const { filteredProducts, paginator} = useProductsContext()
    const arrayPages = [...Array(paginator['total_pages']).keys()]

    return (
        <StyledPaginator>
            <Wrapper>
                Showing {filteredProducts.length} of {paginator.total_results_size}
            </Wrapper>
            <Wrapper className="paginator__controls">
            <Link to={`${pathname}?page=${1}`}>
                <button>{'<<'}</button>
            </Link>
            <Link to={`${pathname}?page=${!(paginator.page - GENERAL.SINGLE_ELEMENT) === 0 ? paginator.page : GENERAL.DEFAULT_PAGE }`}>
            <button>{'<'}</button>
            </Link>            
        
                { 
                    arrayPages.map((item, index) => (
                        <Link key={index} to={`${pathname}?page=${index+1}`}>
                         <button className={paginator.page ===index+1 ? 'active' : '' }>{index + GENERAL.SINGLE_ELEMENT}</button>
                        </Link>
                       
                    ))
                } 
            <Link to={`${pathname}?page=${ (paginator.next_page !== null) ? paginator.page + GENERAL.SINGLE_ELEMENT : paginator.page}`}>
                <button>{'>'}</button>
            </Link>
            
            <Link to={`${pathname}?page=${arrayPages.length}`}>
                <button>{'>>'}</button>  
            </Link>
                                         
            </Wrapper>
        </StyledPaginator>
    )
}

export { Paginator }