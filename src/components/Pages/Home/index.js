import React, {Fragment} from "react";
import { Slider, Button } from "../../Common"
import { CategoryList } from "../../Category/CategoryList"
import { FeaturedProducts } from "../../Products/FeaturedProducts";
import { ELEMENT_SIZE } from "../../../utils/constants";
import featuredBanners from '../../../mocks/en-us/featured-banners.json';
import productCategories from '../../../mocks/en-us/product-categories.json';
import featuredProducts from '../../../mocks/en-us/featured-products.json';

function Home(){
    const { results: slidesData } = featuredBanners;
    const { results: categoriesData } = productCategories;
    const { results: productsData } = featuredProducts;

    return (
        <Fragment>
            <Slider slides={slidesData} />
            <CategoryList categories={categoriesData} />
            <FeaturedProducts products={productsData} />
            <Button size={ELEMENT_SIZE.LG}>View all products</Button>
        </Fragment>
    )
}
export { Home }