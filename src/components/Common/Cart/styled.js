import styled from "styled-components";
import { COLORS } from "../../../utils/constants";

const StyledCart = styled.div`
    display: flex;

    .header__badge{
        background-color: ${COLORS.SECONDARY};
        color: ${COLORS.LIGHT_BASE};
        top: 9px;
        right: 34px;
        position: absolute;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        display: inline-block;
        line-height: 20px;
        text-align: center;
        padding: 1px;
        font-size: 11px;
    }

    @media only screen and (max-width: 768px) {
        .header__badge{
            right: 15px; 
        }
    }     
`;

export { StyledCart }