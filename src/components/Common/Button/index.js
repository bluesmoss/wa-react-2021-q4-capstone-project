import React from "react";
import PropTypes from 'prop-types';
import { StyledButton } from './styled'

function Button(props){

    return (
        <StyledButton settings={props} className={props.className ? props.className : ''} >
            {props.children}
        </StyledButton>      
    )
}

Button.propTypes = {
    size: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
};


export { Button }