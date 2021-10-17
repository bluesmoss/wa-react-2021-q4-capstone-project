import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
`;

function Wrapper(props){

    return (
        <StyledWrapper className={props.className ? props.className : ''} >
            {props.children}
        </StyledWrapper>
    )
}
export { Wrapper }