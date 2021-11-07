import styled from "styled-components";
import { COLORS } from "../../../utils/constants";

const StyledQuantitySelector = styled.div`
    display: flex;
    border: none;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    input[type=number] {
    -moz-appearance: textfield;
    }    

    .product__quantity{
        line-height: 44px;
        width: 66px;
        height: 44px;
        outline: none;
        font-size: 1.4em;
        text-align: center;
        border: 1px solid ${COLORS.GREY_LIGHT};
        border-right: none;
        color: ${COLORS.GREY};
    }

    .product_quantity_button{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .product__quantity-controls{
        border: 1px solid ${COLORS.GREY_LIGHT};
        height: 22px;
        width: 22px;
        text-align: center;
        cursor: pointer;
        font-weight: bold;
        transform: rotate(90deg);
        color: ${COLORS.GREY};

        :hover{
            background: ${COLORS.SECONDARY};
            border-color: ${COLORS.SECONDARY};
            color: ${COLORS.LIGHT_BASE}
        }
    }        
`;

export {StyledQuantitySelector}