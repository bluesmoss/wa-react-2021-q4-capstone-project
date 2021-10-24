import styled from "styled-components";
import { COLORS } from "../../../utils/constants";
  
const StyledProductPreview = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 250px;
    max-height: 500px;
    border: 2px solid ${COLORS.SECONDARY};

.product__main-image{
    max-width: 100%;
    max-height: 400px;
}

.product__information{
    width: 100%;
}

.product__name{
        height: 50px;
        font-size: 1em;
        text-align: center;
        background: ${COLORS.SECONDARY};
        color: white;
        line-height:50px;
}


.product__main-info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
    
`;


export { StyledProductPreview }