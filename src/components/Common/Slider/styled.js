import styled from "styled-components";

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
    transition-duration: 1s;
    transform: scale(1);
}    

@media only screen and (max-width: 768px) {
    .arrow{
        top: 100px;
        height: 32px;     
    }
}      
`;

export { StyledSection }