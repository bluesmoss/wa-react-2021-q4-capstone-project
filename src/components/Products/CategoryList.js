import React from "react";
import {CategoryItem}  from "./CategoryItem"

import styled from "styled-components";
import { COLORS } from "../../utils/constants";
  
const StyledCategoryList = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 2em;
    margin-bottom: 2em;
    gap: 1rem;
`;

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
export { CategoryList }