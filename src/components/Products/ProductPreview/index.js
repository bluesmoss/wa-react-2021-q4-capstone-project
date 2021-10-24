import React from "react";
import PropTypes from 'prop-types';
import { TextColored } from "../../Common"
import { StyledProductPreview } from "./styled"

function ProductPreview({data}){
    return (
            <StyledProductPreview>
                <img src={data.mainimage.url} alt={data.mainimage.alt} className="product__main-image"/> 
                <div className="product__information">
                    <div className="product__name">{data.name}</div>
                    <div className="product__main-info">
                        <span>Category: {data.category.slug}</span>
                        <span>Price: <TextColored color={"PRIMARY"}>$</TextColored>{data.price}</span>
                    </div>
                </div>                               
            </StyledProductPreview>

    )
}

ProductPreview.propTypes = {
    data: PropTypes.object.isRequired,
};
  
ProductPreview.defaultProps = {
    data: {},
};

export { ProductPreview }