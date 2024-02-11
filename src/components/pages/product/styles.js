import styled, {css} from "styled-components";
import {SlSizeFullscreen} from "react-icons/sl";
import {IoIosArrowDropleft, IoIosArrowDropright} from "react-icons/io";

export const productPageShadow = css`
  border: 1px solid  #cccccc;
  border-radius: 5px;
  box-shadow: 0px 1px 2px 1px rgba(0,0,0,0.51);
  -webkit-box-shadow: 0px 1px 2px 1px rgba(0,0,0,0.51);
  -moz-box-shadow: 0px 1px 2px 1px rgba(0,0,0,0.51);
`
export const FlexBetween = css`
  display: flex;
  justify-content: space-between;
`

const iconBasic = css`
  font-size: 30px;
  transform: scale(1.2);
  &:hover {
    cursor: pointer;
    transform: scale(1.5);
  }
`;

export const FullSizeIcon = styled(SlSizeFullscreen)`
  position: absolute;
  top: ${props => props.top};
  right: ${props => props.right};
  ${iconBasic}
`

export const LeftArrowIcon = styled(IoIosArrowDropleft)`
  ${iconBasic}
`

export const RightArrowIcon = styled(IoIosArrowDropright)`
  ${iconBasic}
`
