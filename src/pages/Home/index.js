import React, {Fragment} from "react";
import { Slider, Button, Wrapper } from "../../components/Common"
import { CategoryList } from "../../components/Category/CategoryList"
import { FeaturedProducts } from "../../components/Products/FeaturedProducts";
import { ELEMENT_SIZE, QUERY } from "../../utils/constants";
import { Link } from "react-router-dom";
import { useFeaturedBanners } from "../../utils/hooks/useFeaturedBanners";
import { useGetDataAPI } from "../../utils/hooks/useGetDataAPI";
import { useFeaturedProducts } from "../../utils/hooks/useFeaturedProducts";


function Home(){
    const { data : { results : slidesData} } = useFeaturedBanners();
    const { data : { results : categoriesData} } = useGetDataAPI(QUERY.CATEGORY_PREDICATE, QUERY.CATEGORY_SIZE);
    const { data : { results : productsData } }= useFeaturedProducts();

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