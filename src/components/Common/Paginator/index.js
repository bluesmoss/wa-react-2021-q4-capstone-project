import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { StyledPaginator } from './styled'
import { Wrapper } from "..";
import { useProductsContext } from "../../../providers/Products";

function Paginator(){

    const { filteredProducts, allProducts, paginator} = useProductsContext()
    const arrayPages = [...Array(paginator['total_pages']).keys()]

    return (
        <StyledPaginator>
            <Wrapper>
                Showing {filteredProducts.length} of {allProducts.length}
            </Wrapper>
            <Wrapper className="paginator__controls">
            <button>{'<<'}</button>
            <button>{'<'}</button>
                { 
                    arrayPages.map((item, index) => (
                        <button key={index}>{index+1}</button>
                    ))
                } 

            <button>{'>'}</button>
            <button>{'>>'}</button>                                
            </Wrapper>
        </StyledPaginator>
    )
}

Paginator.propTypes = {
};


export { Paginator }