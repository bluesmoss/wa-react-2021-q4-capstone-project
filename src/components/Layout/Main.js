import React from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  width: 100%;
  height: calc(100vh - 160px);
`;

function Main(){

    return (
        <StyledMain>
            Main
        </StyledMain>
    )
}
export { Main }