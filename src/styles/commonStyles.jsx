import { Container, Link, Typography } from '@mui/material';
import styled, { css } from 'styled-components';
import overlayBefore from '../assets/images/home/before.png';

export const whiteColor = '#FFFFFF';
export const bgWhiteColor = '#f6f6f6';
export const blackNavColor = 'rgba(14, 14, 17, 0.9)';
export const greenColor = '#afbf00';
export const blackColor = '#000';
export const errorColor = '#B00020';
export const successColor = 'rgb(56, 142, 60)';
export const brightGreenColor = '#eaff00';
export const myFont = 'Nerko One';
export const mobileSize = 40;
export const laptopSize = 42;

export const BodyText = styled(Typography)`
  && {
    font-size: 20px;
    font-family: ${myFont};
  }
`;

export const priceColor = 'rgb(161, 173, 61)';

export const grey1 = '#e7e7e7;';

export const HeaderText = styled(Typography)`
  font-size: 32px;
  color: ${(props) => (!!props.color ? props.color : whiteColor)};
  text-align: ${(props) => (!!props.textAlign ? props.textAlign : 'center')};
`;

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

    padding: 0vh 10px;
  }
`;

export const GeneralText = styled(BodyText)`
  && {
    color: ${(props) => (!!props.color ? props.color : whiteColor)};
    font-size: ${(props) => (!!props.fontSize ? props.fontSize : '20px')};
    text-align: ${(props) => (!!props.textAlign ? props.textAlign : 'center')};
  }
`;

export const GeneralLink = styled(Link)`
  &&&& {
    color: ${(props) => (!!props.color ? props.color : greenColor)};
    text-decoration: none;
    font-size: 20px !important;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Title = styled(HeaderText)`
  text-transform: uppercase;
  font-size: 46px;
  letter-spacing: 2px;
  && {
    font-family: ${myFont};
  }
  font-weight: 700;
  color: ${(props) => (props.isBlack ? blackColor : whiteColor)};
`;

export const StyleDiv = styled.div`
  padding-top: 3%;
`;

export const verticalCentral = css`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CommonContainer = styled(Container)`
  min-height: 80vh;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: ${priceColor};
  outline: none;
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
  margin: 0;
  color: #ffffff;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`;

export const Banner = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  height: 50vh;
  background-image: url(${(props) => props.url});
  background-size: cover !important;
  background-position: ${(props) => props.position};
  ${(props) =>
    props.showOverlay &&
    css`
      &::after {
        content: '';
        display: block;
        width: 100%;
        position: absolute;
        @media (min-width: 728px) {
          height: 100px;
        }
        background: url(${overlayBefore}) 50% 50% no-repeat;
        background-size: cover;
        bottom: 0;
        left: 0;
        z-index: 3;
      }
    `}
`;

export const productPageShadow = css`
  border: 1px solid #cccccc;

  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.51);
  -webkit-box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.51);
  -moz-box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.51);
`;
