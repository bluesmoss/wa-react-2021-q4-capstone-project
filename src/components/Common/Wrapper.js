import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
`;

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