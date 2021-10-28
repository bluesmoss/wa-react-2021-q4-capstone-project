import React from "react";
import PropTypes from 'prop-types';
import { StyledPaginator } from './styled'
import { Wrapper } from "..";

function Paginator(props){

    const arrayPages = Array.of(1,2,3)

    return (
        <StyledPaginator>
            <Wrapper>
                Showing {props.totalSearched} of {props.total}
            </Wrapper>
            <Wrapper className="paginator__controls">
            <button>{'<<'}</button>
            <button>{'<'}</button>
                {arrayPages.map((item, index) => (
                        <button key={index}>{index+1}</button>
                    ))} 

            <button>{'>'}</button>
            <button>{'>>'}</button>                                
            </Wrapper>
        </StyledPaginator>
    )
}

Paginator.propTypes = {
    total: PropTypes.number.isRequired,
    totalSearched: PropTypes.number.isRequired,
};


export { Paginator }