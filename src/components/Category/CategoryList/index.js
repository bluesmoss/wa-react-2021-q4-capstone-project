import React from "react";
import PropTypes from 'prop-types';
import { StyledCategoryList } from "./styled"
import { CategoryItem }  from "../CategoryItem"
import { Link } from "react-router-dom";

function CategoryList({categories}){
    return (
        <StyledCategoryList>
            {categories.map((category, index) => (
                <Link  key={category.id} to={`products?category=${category.slugs}`}>
                    <CategoryItem 
                        image= {category.data.main_image}
                        name= {category.data.name}
                    />                   
                </Link>
                       
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