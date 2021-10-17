import React from "react";
import { Slider } from "../../Common/Slider"
import featuredBanners from '../../../mocks/en-us/featured-banners.json';

function Home(){
    const { results: slidesData } = featuredBanners;

    return (
        <React.Fragment>
            <Slider slides={slidesData} />
        </React.Fragment>
    )
}
export { Home }