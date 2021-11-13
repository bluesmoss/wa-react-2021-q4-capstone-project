import styled from "styled-components";
import { COLORS } from "../../utils/constants";

const StyledProduct = styled.div`
    display: flex;
    justify-content: center;

    .product__container{
        max-width: 992px;
        padding: 30px;
        gap: 40px;
    }

    .product_info{
        label{
            font-weight: bold;
        }
    }

    .product__title{
        margin-bottom: 4px;
        margin-inline-end: 0px;
    }

    .product__price{
        font-size: 1.7em;
        color: ${COLORS.GREY};
        font-weight: bold;
    }

    .product__description{
        border-top: 1px solid ${COLORS.GREY_LIGHT};
        padding-top: 1em;
    }

    .product__add{
        margin-bottom: 1em;
    }

`;

export { StyledProduct }