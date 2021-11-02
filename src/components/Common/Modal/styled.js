import styled from "styled-components";

const StyledModal = styled.div`
    background: rgba(32,35,41,.9);
    position: fixed;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    z-index: 5;

    .modal__close{

        position: fixed;
        top: 30px;
        right: 50px;
        background: none;
        border: none;
        color: #dfdfdf;
        border: 3px solid white;
        border-radius: 50px;
        height: 50px;
        width: 50px;
        font-size: 2em;

        :hover{
            color: #ffffff;
            cursor: pointer;
        }
    }
`;

export {StyledModal}