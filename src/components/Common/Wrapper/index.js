import React from "react";
import PropTypes from 'prop-types';
import { StyledWrapper } from "./styled"

Wrapper.propTypes = {
    className: PropTypes.string,
};

function Wrapper(props){

    return (
        <StyledWrapper className={props.className ? props.className : ''} >
            {props.children}
        </StyledWrapper>
    )
}
export { Wrapper }