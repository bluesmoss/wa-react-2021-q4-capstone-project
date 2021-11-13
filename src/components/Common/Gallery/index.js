import React, { useState } from "react";
import PropTypes from 'prop-types';
import arrowLeft from "../../../assets/arrow-left.png"
import arrowRight from "../../../assets/arrow-right.png"
import { StyledGallery } from "./styled"

function Gallery({slides}){

    const [current, setCurrent] = useState(0)
    const length = slides.length;

    const nextSlide = () => {
        let next = current === length - 1 ? 0 : current +1;
        setCurrent(next)
    }

    const prevSlide = () => {
        let prev = current === 0 ? length - 1  : current - 1;
        setCurrent(prev)
    }    

    return (
        <StyledGallery>
            <img src={arrowLeft} alt='previous' className="arrow left-arrow" onClick={prevSlide}/>
            <img src={arrowRight} alt='next' className="arrow right-arrow" onClick={nextSlide}/>
            {slides.map((slide, index) => (
                <div key={`gallery-${index}`} className={ current === index ? "slide active" : "slide"}>
                    {current === index && (
                        <img  className="gallery__image" src={slide.image.url} alt={slide.image.alt} />  
                    )}
                
                </div>                              
            ))}
        </StyledGallery>
    )
}

Gallery.propTypes = {
    slides: PropTypes.array,
};
  
Gallery.defaultProps = {
    slides: [],
};

export { Gallery }