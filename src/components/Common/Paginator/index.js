import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { StyledPaginator } from './styled'
import { Wrapper } from "..";
import { useProductsContext } from "../../../providers/Products";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

function Paginator(){
    const { pathname, search } = useLocation();

    const { filteredProducts, allProducts, paginator} = useProductsContext()
    const arrayPages = [...Array(paginator['total_pages']).keys()]

    return (
        <StyledPaginator>
            <Wrapper>
                Showing {filteredProducts.length} of {allProducts.length}
            </Wrapper>
            <Wrapper className="paginator__controls">
            <Link to={`${pathname}?page=${1}`}>
                <button>{'<<'}</button>
            </Link>
            <Link to={`${pathname}?page=${!(paginator.page - 1) === 0 ? paginator.page : 1}`}>
            <button>{'<'}</button>
            </Link>            
        
                { 
                    arrayPages.map((item, index) => (
                        <Link to={`${pathname}?page=${index+1}`}>
                         <button className={paginator.page ===index+1 ? 'active' : '' }  key={index}>{index+1}</button>
                        </Link>
                       
                    ))
                } 
            <Link to={`${pathname}?page=${paginator.page + 1}`}>
            <button>{'>'}</button>
            </Link>
            
            <Link to={`${pathname}?page=${arrayPages.length}`}>
                <button>{'>>'}</button>  
            </Link>
                                         
            </Wrapper>
        </StyledPaginator>
    )
}

Paginator.propTypes = {
};


export { Paginator }