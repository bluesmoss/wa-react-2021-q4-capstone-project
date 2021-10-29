import styled from "styled-components";
import { STYLES_SIZE, COLORS } from "../../../utils/constants";

const StyledButton = styled.button`
    text-decoration: none;
    background: ${COLORS.PRIMARY};
    color: #ffffff;
    font-weight: bold;
    padding: 15px 30px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: ${props => STYLES_SIZE[props.settings.size] ? STYLES_SIZE[props.settings.size] : STYLES_SIZE.MD };

    :hover{
        background-image: linear-gradient(to right, ${COLORS.PRIMARY}, ${COLORS.SECONDARY});
    }
`;

export { StyledButton }