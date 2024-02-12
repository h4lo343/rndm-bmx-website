import styled, {css} from "styled-components";
import {SlSizeFullscreen} from "react-icons/sl";
import { IoIosArrowDropleft, IoIosArrowDropright, IoIosArrowDropup, IoIosArrowDropdown   } from "react-icons/io";

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
  z-index: 100;
`;

export const FullSizeIcon = styled(SlSizeFullscreen)`
  position: absolute;
  top: ${props => props.top};
  right: ${props => props.right};
  ${iconBasic};
  font-size: 20px
  
`

export const LeftArrowIcon = styled(IoIosArrowDropleft)`
  ${iconBasic};
  transform: scale(1.2);

  &:hover {
    cursor: pointer;
    transform: scale(1.5);
  }
`

const topBottomArrowBasic = css`
  position: absolute;
`

const topBotOffset = '-15px'

export const productPageResponsiveThreshold1 = '1000px'
export const productPageResponsiveThreshold2 = '770px'


export const TopArrowIcon = styled(IoIosArrowDropup)`
  ${iconBasic};
  ${topBottomArrowBasic};
  top: ${topBotOffset};
  left: 50%;
  transform: translateX(-50%) scale(1.2);
  &:hover {
    cursor: pointer;
    transform: translateX(-50%) scale(1.5);
  }
`

export const BottomArrowIcon = styled(IoIosArrowDropdown)`
  ${iconBasic};
  ${topBottomArrowBasic};
  bottom:  ${topBotOffset};
  left: 50%;
  transform: translateX(-50%) scale(1.2);
  &:hover {
    cursor: pointer;
    transform: translateX(-50%) scale(1.5);
  }
`

export const RightArrowIcon = styled(IoIosArrowDropright)`
  ${iconBasic};
  transform: scale(1.2);

  &:hover {
    cursor: pointer;
    transform: scale(1.5);
  }
`
