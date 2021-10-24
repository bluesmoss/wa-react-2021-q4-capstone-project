import React from "react";
import PropTypes from 'prop-types';
import { StyledLink } from './styled'

function LinkColored(props){

    const urlTarget = (props.newPage) ? '_blank' : '_self'

    return (
        <StyledLink target={urlTarget} href={props.url}>
            {props.children}
        </StyledLink>
    )
}

LinkColored.propTypes = {
    newPage: PropTypes.bool,
    children: PropTypes.string.isRequired,
};
  
LinkColored.defaultProps = {
    newPage: false,
};

export { LinkColored }