import React, {Fragment} from "react";
import {productCategories} from '../../../mocks/en-us';
import { Sidebar, Wrapper, Checkbox, TextColored} from "../../../components/Common"
import {TEXT_COLOR_TYPES} from "../../../utils/constants"

function Products(){
    const { results: categories } = productCategories;
    console.info(categories)
    return (
        <Fragment>
            <Wrapper className="filters" flex justify="start">
                <Sidebar>
                    <Wrapper className="filters__header">
                        Filters
                    </Wrapper>
                    <Wrapper className="filters__section">
                        <span className="filters__title">Category</span>
                        {categories.map((category) => (
                            <Checkbox 
                                key={category.id}
                                name= {category.data.name}
                                id={category.id}
                            />
                        ))}                    
                    </Wrapper>                     
                </Sidebar>
                <Wrapper>
                    okok
                </Wrapper>
            </Wrapper>
        </Fragment>
    )
}
export { Products }