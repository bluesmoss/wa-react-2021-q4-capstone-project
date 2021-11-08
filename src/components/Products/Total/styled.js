import styled from "styled-components";
import { COLORS } from "../../../utils/constants";

const StyledTotal = styled.div`

    display: flex;
    justify-content: end;


    .total__wrapper{
        margin: 30px 0px;
        border: 1px solid ${COLORS.GREY_LIGHT};
        padding: 10px;
        width: 40%;
    }

    .total__title{
        font-size: 2em;
        width: 100%;
        border-bottom: 1px solid ${COLORS.GREY_LIGHT};
        display: flex;
        justify-content: space-between;
    }

    .total_checkout{
        width: 100%;
        margin-top: 15px;
    }
`;

export {StyledTotal}