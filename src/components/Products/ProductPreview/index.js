import React from "react";
import PropTypes from 'prop-types';
import { Button, TextColored, Wrapper } from "../../Common"
import { StyledProductPreview } from "./styled"
import { ELEMENT_SIZE } from "../../../utils/constants";
import cart from '../../../assets/cart.png'
import { Link } from "react-router-dom";

function ProductPreview({data, id}){
    return (
            <StyledProductPreview>
                <img src={data.mainimage.url} alt={data.mainimage.alt} className="product__main-image"/> 
                <div className="product__information">
                    <div className="product__name">{data.name}</div>
                    <div className="product__main-info">
                        <span>Category: {data.category.slug}</span>
                        <span>Price: <TextColored color={"SECONDARY"}>$</TextColored>{data.price}</span>
                    </div>
                    <Wrapper flex justify="space-evenly"  className="product__actions">
                        <button className="product__add-cart">
                            <img  className="product__cart"  src={cart} alt="cart"/>
                        </button>
                        <Link to={`/product/${id}`}>
                            <Button size={ELEMENT_SIZE.MD} className="product__details" >View details</Button>
                        </Link>
                    </Wrapper>
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