import styled from "styled-components";
import { COLORS } from "../../../utils/constants";
  
const StyledCategory = styled.div`
    font-weight: bold;
    display: flex;
    flex-direction: column;
    max-width: 300px;
    max-height: 400px;

    .category__name{
        text-align: center;
        background: ${COLORS.PRIMARY};
        color: white;
    }
`;

export { StyledCategory }