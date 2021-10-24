import styled from "styled-components";
import { STYLES_SIZE } from "../../../utils/constants";

const StyledButton = styled.button`
    text-decoration: none;
    background-image: linear-gradient(to right, #3285d1, #21c08b);
    color: #ffffff;
    font-weight: bold;
    padding: 10px;
    border: none;
    cursor: pointer;
    font-size: ${props => STYLES_SIZE[props.settings.size] ? STYLES_SIZE[props.settings.size] : STYLES_SIZE.MD };

    :hover{
        background-image: linear-gradient(to left, #3285d1, #21c08b);
    }
`;

export { StyledButton }