import React from "react";
import styled from "styled-components";
import {Home} from "../Pages/Home"

const StyledMain = styled.main`
  min-height: calc(100vh - 160px);
`;

function Main(){

    return (
        <StyledMain>
            <Home/>
        </StyledMain>
    )
}
export { Main }