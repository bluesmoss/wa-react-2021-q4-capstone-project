import styled from "styled-components";
import { COLORS } from "../../../utils/constants";

const StyledTable = styled.table`

    border: 1px solid ${COLORS.GREY_LIGHT};
    color: ${COLORS.GREY};
    border-spacing: 0px;

    thead {
        background-color: ${COLORS.SECONDARY};
        color: ${COLORS.LIGHT_BASE};
    }
}    

    .table__product{
        display: flex;
        justify-content: start;
        align-items: center;
        padding-left: 30px;
    }

    .table__image{
        max-height: 100px;
    }

    .table__remove{
        border: none;
        background: none;
        cursor: pointer;

        &-button{
            height: 32px;
        }
    }

    .table__quantity{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
    }
`;

export {StyledTable}