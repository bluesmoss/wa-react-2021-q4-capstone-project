import React from "react";
import styled from "styled-components";
import { COLORS } from "../../utils/constants";
  
const StyledTextGradient = styled.span`
    ${props => props.settings.uppercase ? "text-transform: uppercase;" : "" };
    ${props => props.settings.lowercase ? "text-transform: lowercase;" : "" };
    ${props => props.settings.capitalize ? "text-transform: capitalize;" : "" };
    font-size: ${props => props.settings.fontSize ? props.settings.fontSize : '1em' };
    color: ${props => COLORS[props.settings.color] ? COLORS[props.settings.color] : COLORS.PRIMARY };
    font-weight: bold;

    ::before{
        content: ${props => props.settings.children ? '"' + props.settings.children + '"' : '' };
        background: linear-gradient(to left, ${COLORS.PRIMARY},  ${COLORS.SECONDARY});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;        
    }
`;


function TextGradient(props){
    return (
        <StyledTextGradient settings={props} className={props.className ? props.className : ''}/>
    )
}

export { TextGradient }