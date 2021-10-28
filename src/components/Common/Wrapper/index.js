import React from "react";
import PropTypes from 'prop-types';
import { StyledWrapper } from "./styled"

function Wrapper(props){

    return (
        <StyledWrapper settings={props} className={props.className ? props.className : ''} >
            {props.children}
        </StyledWrapper>
    )
}

Wrapper.propTypes = {
    className: PropTypes.string,
    justify: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string,    
    flex: PropTypes.bool,
    flexColumn: PropTypes.bool,
};

export { Wrapper }