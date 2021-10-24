import styled from "styled-components";
import { COLORS } from "../../../utils/constants";

const StyledFooter = styled.footer`
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-top: 2px solid ${COLORS.SECONDARY};
`;

export { StyledFooter }