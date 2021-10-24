import React, {Fragment} from "react";
import { Slider, Button, Wrapper } from "../../Common"
import { CategoryList } from "../../Category/CategoryList"
import { FeaturedProducts } from "../../Products/FeaturedProducts";
import { ELEMENT_SIZE } from "../../../utils/constants";
import { Link } from "react-router-dom";
import {featuredBanners, productCategories, featuredProducts} from '../../../mocks/en-us';


function Home(){
    const { results: slidesData } = featuredBanners;
    const { results: categoriesData } = productCategories;
    const { results: productsData } = featuredProducts;

    return (
        <Fragment>
            <Slider slides={slidesData} />
            <CategoryList categories={categoriesData} />
            <FeaturedProducts products={productsData} />
            <Wrapper className="home__button" flex justify="center" margin="30px">
                <Link to="/products">
                    <Button size={ELEMENT_SIZE.LG}>View all products</Button>
                </Link>
            </Wrapper>
        </Fragment>
    )
}
export { Home }