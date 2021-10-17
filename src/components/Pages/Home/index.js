import React from "react";
import { Slider } from "../../Common/Slider"
import {CategoryList} from "../../Products/CategoryList"
import featuredBanners from '../../../mocks/en-us/featured-banners.json';
import productCategories from '../../../mocks/en-us/product-categories.json';

function Home(){
    const { results: slidesData } = featuredBanners;
    const { results: categoriesData } = productCategories;
    console.log(categoriesData)

    return (
        <React.Fragment>
            <Slider slides={slidesData} />
            <CategoryList categories={categoriesData} />
        </React.Fragment>
    )
}
export { Home }