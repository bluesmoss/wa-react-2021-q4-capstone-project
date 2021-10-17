import React from "react";
import styled from "styled-components";
import {TextColored} from "../Common/TextColored"
import { COLORS } from "../../utils/constants";
  
const StyledProductOverview = styled.div`
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

function ProductOverview({data}){
    return (
            <StyledProductOverview>
                <img src={data.mainimage.url} alt={data.mainimage.alt} className="product__main-image"/> 
                <div className="product__information">
                    <div className="product__name">{data.name}</div>
                    <div className="product__main-info">
                        <span>Category: {data.category.slug}</span>
                        <span>Price: <TextColored color={"PRIMARY"}>$</TextColored>{data.price}</span>
                    </div>
                </div>                               
            </StyledProductOverview>

    )
}
export { ProductOverview }