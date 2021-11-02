import styled from "styled-components";
import { COLORS } from "../../../utils/constants";

const StyledHeader = styled.header`
height: 40px;
position: sticky;
top: 0;
display: flex;
padding: 10px 50px;
flex-direction: row;
justify-content: space-between;
align-items: center;
border-bottom: 2px solid ${COLORS.PRIMARY};
background: #ffffff;
z-index: 3;

  .header__logo{

      font-weight: bold;
      font-size: 1.7em;
      cursor: pointer;

      :hover > .header__text::before{
          content: "Weird is good";
          background: linear-gradient(to left, ${COLORS.TERTIARY},  ${COLORS.PRIMARY});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;    
      }  
  }

  .header__search-button{
    background: none;
    height: 1.7rem;
    width: 40px;
    border: none;
  }

  .header__search-icon{
      height: 24px;
      width: 24px;
      top: 30px;
      position: absolute;
      transform: translate(-50%,-50%);
      transition: .2s;
      cursor: pointer;    
  }
  
  .header__cart{
      height: 32px;
      width: 32px;
      cursor: pointer;
  }
  
  .header__actions{
      display: flex;
      align-items: center;
      gap: 1rem;
  }

  .header__search-wrapper{
      display: flex;
      align-items: center;

    }

  }

  @media only screen and (max-width: 768px) {

      padding: 10px 30px;

      .header__logo{
          font-size: 1.5rem;
      }
  }    

`;

export { StyledHeader }