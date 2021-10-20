import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import { COLORS } from "../../utils/constants";
  
const StyledCategory = styled.div`
    font-weight: bold;
    display: flex;
    flex-direction: column;
    max-width: 300px;
    max-height: 400px;

    .category__name{
        text-align: center;
        background: ${COLORS.SECONDARY};
        color: white;
    }
`;

CategoryItem.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
};
  
CategoryItem.defaultProps = {
    name: '',
    image: {},
};

function CategoryItem({image, name}){
    return (
        <StyledCategory>
            <img src={image.url} alt={image.alt} />
            <span className="category__name">{name}</span>
        </StyledCategory>
    )
}
export { CategoryItem }