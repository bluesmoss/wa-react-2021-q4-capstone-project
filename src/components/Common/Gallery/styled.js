import styled from "styled-components";

const StyledGallery = styled.section`
position: relative;
display: flex;
justify-content: center;
max-height: 400px;


.gallery__image{
    width: 400px;
}

.arrow{
    position: absolute;
    top: 200px;
    user-select: none;
    cursor: pointer;
    z-index: 1;
    height: 24px;
}

.left-arrow{
    left: 16px;
}

.right-arrow{
    right: 16px;
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

export { StyledGallery }