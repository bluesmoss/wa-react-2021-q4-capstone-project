import React from "react";
import PropTypes from 'prop-types';
import { StyledLink } from './styled'

function Link(props){

    const urlTarget = (props.newPage) ? '_blank' : '_self'

    return (
        <StyledLink target={urlTarget} href={props.url}>
            {props.children}
        </StyledLink>
    )
}

Link.propTypes = {
    newPage: PropTypes.bool,
    children: PropTypes.string.isRequired,
};
  
Link.defaultProps = {
    newPage: false,
};

export { Link }