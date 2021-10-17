import React from "react";
import styled from "styled-components";

const StyledLink = styled.a`
    text-decoration: none;
    color: #3283d3;
    font-weight: bold;
`;

function Link(props){

    let urlTarget = (props.newPage) ? '_blank' : '_self'

    return (
        <StyledLink target={urlTarget} href={props.url}>
            {props.children}
        </StyledLink>
    )
}
export { Link }