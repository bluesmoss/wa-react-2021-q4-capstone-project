import styled from "styled-components";

const StyledSearch = styled.div`
    width: 80%;
    padding: 50px;
    display: flex;
    justify-content: center;

    .search__label{
        font-size: 1.3em;
        padding-left: 15px;
        padding-bottom: 5px;
    }

    .search__input{
        padding: 10px 20px;
        width: 80%;
        background: transparent;
        border-radius: 0px;
        border: 3px solid #dfdfdf;
        outline: none;
        font-size: 3em;
        color: #dfdfdf;
        border-right: none;

        :focus{
            border: 3px solid #ffffff;
            border-right: none;
        }
    }

    .search__button{
        width: 5em;
        background: transparent;
        border: 3px solid #dfdfdf;
        
        :hover{
            background: #21c08b;
            cursor: pointer;
        }

    }
    
`;

export {StyledSearch}