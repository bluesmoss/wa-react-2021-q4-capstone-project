import styled from "styled-components";
import { COLORS } from "../../../utils/constants";

const StyledPaginator = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 60px 60px 20px 60px;

    .paginator__controls{
        button{
            border: 1px solid ${COLORS.PRIMARY};
            background: none;
            margin: 2px;
            color: ${COLORS.PRIMARY};
            font-size: 1.2em;
            cursor: pointer;

            :hover{
                background: ${COLORS.PRIMARY};
                color: ${COLORS.LIGHT_BASE};
            }
        }
    }
`;

export {StyledPaginator}