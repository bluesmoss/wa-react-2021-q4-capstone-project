import React, {Fragment, useEffect, useContext} from "react";
import { Slider, Button, Wrapper } from "../../components/Common"
import { CategoryList } from "../../components/Category/CategoryList"
import { FeaturedProducts } from "../../components/Products/FeaturedProducts";
import { ELEMENT_SIZE, GENERAL } from "../../utils/constants";
import { Link } from "react-router-dom";
import {featuredBanners, productCategories, featuredProducts} from '../../mocks/en-us';
import { ProductsContext } from "../../contexts/Products";


function Home(){
    const { results: slidesData } = featuredBanners;
    const { results: categoriesData } = productCategories;
    const { results: productsData } = featuredProducts;

    const { allProducts, setFilteredProducts, setFilters} = useContext(ProductsContext)

    useEffect( ()=>{
        setFilteredProducts(allProducts)
        setFilters(GENERAL.EMPTY_ARRAY)
    })

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