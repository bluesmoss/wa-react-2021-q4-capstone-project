import React, {Fragment} from "react";
import { Slider } from "../../Common/Slider"
import { CategoryList } from "../../Category/CategoryList"
import { FeaturedProducts } from "../../Products/FeaturedProducts";
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
        </Fragment>
    )
}
export { Home }