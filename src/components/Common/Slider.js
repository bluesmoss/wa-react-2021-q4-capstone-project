import React, {useState} from "react";
import styled from "styled-components";
import arrowLeft from "../../assets/arrow-left.png"
import arrowRight from "../../assets/arrow-right.png"

const StyledSection = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    max-height: 400px;
    

    .slider__image{
        max-height: 400px;
        width: 100%;
    }

    .arrow{
        position: absolute;
        top: 180px;
        user-select: none;
        cursor: pointer;
        z-index: 1;
    }

    .left-arrow{
        left: 32px;
    }

    .right-arrow{
        right: 32px;
    }

    .slide{
        opacity: 0;
        transition-duration: 1s ease;
    }

    .slide.active{
        opacity: 1;
        transition-duration: 1.5s;
        transform: scale(1);
    }    
    
    @media only screen and (max-width: 768px) {
        .arrow{
            top: 100px;
            height: 32px;     
        }
    }      
`;

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
export { Slider }