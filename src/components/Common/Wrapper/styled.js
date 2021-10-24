import styled from "styled-components";

const StyledWrapper = styled.div`
    ${props => props.settings.flex ? "display: flex; " : "" };
    ${props => props.settings.flexColumn ? "display: flex; flex-direction: column" : "" };
    margin: ${props => props.settings.margin ? props.settings.margin : "0px" };
    padding: ${props => props.settings.padding ? props.settings.margin : "0px" };
    justify-content: ${props => props.settings.justify ? props.settings.justify : "center" };
`;

export { StyledWrapper }