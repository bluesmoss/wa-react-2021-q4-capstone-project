import styled from "styled-components";
import { COLORS } from "../../utils/constants";

const StyledProduct = styled.div`
display: flex;
justify-content: space-between;
padding: 30px;
gap: 40px;

.product_info{
    label{
        font-weight: bold;
    }
}

.product__add-cart{
        padding: 5px;
        background: none;
        border: 2px solid ${COLORS.PRIMARY};
        border-radius: 5px;
        cursor: pointer;
        margin-left: 20px;

        :hover{
            border: 2px solid ${COLORS.SECONDARY};
    }

}

.product__cart{
        height: 30px;
}

`;

export { StyledProduct }