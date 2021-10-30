import React, {Fragment, useEffect} from "react";
import { Slider, Button, Wrapper } from "../../components/Common"
import { CategoryList } from "../../components/Category/CategoryList"
import { FeaturedProducts } from "../../components/Products/FeaturedProducts";
import { ELEMENT_SIZE } from "../../utils/constants";
import { Link } from "react-router-dom";
import { productCategories, featuredProducts} from '../../mocks/en-us';
import { useFeaturedBanners } from "../../utils/hooks/useFeaturedBanners";


function Home(){
    const { data : { results : slidesData} } = useFeaturedBanners();
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