import styled from "styled-components";
import { COLORS } from "../../../utils/constants";

const StyledSidebar = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: start;
    flex-wrap: wrap;
    min-width: 250px;
    min-height: calc(100vh - 160px);
    border-right: 2px solid ${COLORS.PRIMARY};


    .filters{
        &__header{
        background-color: ${COLORS.PRIMARY};
        color: ${COLORS.LIGHT_BASE};
        font-size: 1.5em;
        padding: 0px 10px;
        }        

        &__section{
            padding: 0px 10px;
        }

        &__title{
            font-size: 1.5em;
        }
    }
`;

export { StyledSidebar }