import styled, { css } from 'styled-components';
import { SlSizeFullscreen } from 'react-icons/sl';
import {
  IoIosArrowDropleft,
  IoIosArrowDropright,
  IoIosArrowDropup,
  IoIosArrowDropdown,
} from 'react-icons/io';

export const FlexBetween = css`
  display: flex;
  justify-content: space-between;
`;

const iconBasic = css`
  font-size: 30px;
  z-index: 100;
`;

export const FullSizeIcon = styled(SlSizeFullscreen)`
  position: absolute;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  ${iconBasic};
  font-size: 20px;
`;

export const LeftArrowIcon = styled(IoIosArrowDropleft)`
  ${iconBasic};
  transform: scale(1.2);

  &:hover {
    cursor: pointer;
    transform: scale(1.5);
  }
`;

const topBottomArrowBasic = css`
  position: absolute;
`;

const topBotOffset = '-15px';

export const productPageResponsiveThreshold1 = '1000px';

export const productPageResponsiveThreshold2 = '770px';

export const originalPrice = css`
  font-family: 'Arial';
  font-size: 15px;
  text-decoration: line-through;
  opacity: 0.5;
  margin-right: 5px;
`;

export const OriginalPriceBox = styled.span`
  ${originalPrice}
`;

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
`;

export const BottomArrowIcon = styled(IoIosArrowDropdown)`
  ${iconBasic};
  ${topBottomArrowBasic};
  bottom: ${topBotOffset};
  left: 50%;
  transform: translateX(-50%) scale(1.2);
  &:hover {
    cursor: pointer;
    transform: translateX(-50%) scale(1.5);
  }
`;

export const RightArrowIcon = styled(IoIosArrowDropright)`
  ${iconBasic};
  transform: scale(1.2);

  &:hover {
    cursor: pointer;
    transform: scale(1.5);
  }
`;
