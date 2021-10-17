import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const StyledLink = styled.a`
    text-decoration: none;
    color: #3283d3;
    font-weight: bold;
`;

Link.propTypes = {
    newPage: PropTypes.bool,
    children: PropTypes.string.isRequired,
};
  
Link.defaultProps = {
    newPage: false,
};

function Link(props){

    let urlTarget = (props.newPage) ? '_blank' : '_self'

    return (
        <StyledLink target={urlTarget} href={props.url}>
            {props.children}
        </StyledLink>
    )
}
export { Link }