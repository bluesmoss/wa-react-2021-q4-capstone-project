import React from "react";
import PropTypes from 'prop-types';
import { StyledCategoryList } from "./styled"
import { CategoryItem }  from "../CategoryItem"

function CategoryList({categories}){

    return (
        <StyledCategoryList>
            {categories.map((category, index) => (
                <CategoryItem 
                    key={category.id}
                    image= {category.data.main_image}
                    name= {category.data.name}
                />                           
            ))}
        </StyledCategoryList>
    )
}

CategoryList.propTypes = {
    categories: PropTypes.array,
};
  
CategoryList.defaultProps = {
    categories: [],
};

export { CategoryList }