import styled from "styled-components";
import { COLORS } from "../../../utils/constants";

const StyledCartButton = styled.div`

    .product__add-cart{
        padding: 5px;
        background: none;
        border: 2px solid ${COLORS.PRIMARY};
        border-radius: 5px;
        cursor: pointer;
        margin-left: 10px;

        :hover{
            border: 2px solid ${COLORS.SECONDARY};
        }

        &.disabled{
            border: 2px solid ${COLORS.GREY};
            background:  ${COLORS.GREY_LIGHT};
            cursor: not-allowed;
        }
    }

    .product__cart{
        height: 30px;
    }

`;

export {StyledCartButton}