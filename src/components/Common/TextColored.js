import React from "react";
import styled from "styled-components";
import { COLORS } from "../../utils/constants";
  
const StyledText = styled.span`
    ${props => props.settings.uppercase ? "text-transform: uppercase;" : "" };
    ${props => props.settings.lowercase ? "text-transform: lowercase;" : "" };
    ${props => props.settings.capitalize ? "text-transform: capitalize;" : "" };
    color: ${props => COLORS[props.settings.color] ? COLORS[props.settings.color] : COLORS.PRIMARY };
    font-weight: bold;
`;

function TextColored(props){
    return (
        <StyledText settings={props}>
            {props.children}
        </StyledText>
    )
}

export { TextColored }