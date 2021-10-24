import React, { useState } from "react";
import PropTypes from 'prop-types';
import arrowLeft from "../../../assets/arrow-left.png"
import arrowRight from "../../../assets/arrow-right.png"
import { StyledSection } from "./styled"

function Slider({slides}){

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
        <StyledSection>
            <img src={arrowLeft} alt='previous' className="arrow left-arrow" onClick={prevSlide}/>
            <img src={arrowRight} alt='next' className="arrow right-arrow" onClick={nextSlide}/>
            {slides.map((slide, index) => (
                <div key={slide.id} className={ current === index ? "slide active" : "slide"}>
                    {current === index && (
                        <img  className="slider__image" src={slide.data.main_image.url} alt={slide.data.main_image.alt} />  
                    )}
                
                </div>                              
            ))}
        </StyledSection>
    )
}

Slider.propTypes = {
    slides: PropTypes.array,
};
  
Slider.defaultProps = {
    slides: [],
};

export { Slider }