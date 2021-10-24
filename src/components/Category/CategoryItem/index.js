import React from "react";
import PropTypes from 'prop-types';
import { StyledCategory } from "./styled"

function CategoryItem({image, name}){
    return (
        <StyledCategory>
            <img src={image.url} alt={image.alt} />
            <span className="category__name">{name}</span>
        </StyledCategory>
    )
}

CategoryItem.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
};
  
CategoryItem.defaultProps = {
    name: '',
    image: {},
};

export { CategoryItem }