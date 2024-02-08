import styled from "styled-components";
import {HeaderText, myFont} from "../../styles/commonStyles";

export const TitleText = styled(HeaderText)`
  && {
    font-size: 60px !important;
    font-family: ${myFont};
    text-shadow: -2px 2px 1px #000;
    font-weight: 700;
    height: 90vh;
    @media (min-width: 1024px) {
      max-width: 720px;
      font-size: 80px !important;
    }
    align-items: center;
    justify-content: center;
    display: flex;
    height: 100vh;
    padding: 0vh 10px;
  }
`;
