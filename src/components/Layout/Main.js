import React from "react";
import styled from "styled-components";
import {Home} from "../Home"

const StyledMain = styled.main`
  width: 100%;
  height: calc(100vh - 160px);
`;

function Main(){

    return (
        <StyledMain>
            <Home/>
        </StyledMain>
    )
}
export { Main }