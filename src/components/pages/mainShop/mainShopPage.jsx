import React from 'react';
import styled from 'styled-components';
import { NavigationBar } from '../../common/NavigationBar';
import BgdImage from '../../../assets/images/mainShop/main_shop_backgroud.jpg';
import {
  Banner,
  blackColor,
  GeneralText,
  grey1,
  TitleText,
} from '../../../styles/commonStyles';

export const MainShopPage = () => {
  return (
    <MainShopPageContainer>
      <NavigationBar isHomePage={false} arrayToHandle={[]} />
      <Banner url={BgdImage} position={'50% 15%'} showOverlay={true}></Banner>
      <ShopDescriptionContainer>
        <ShopTitle>shop</ShopTitle>
        <GeneralText color={blackColor} textAlign={'left'}>
          Welcome to the SHOP Page. Click/Tap a Sub-catagory below to be taken
          to that desired part of the Shop or click on a particular Product
          Image to find out more about the particular Item.
        </GeneralText>
      </ShopDescriptionContainer>
    </MainShopPageContainer>
  );
};

const MainShopPageContainer = styled.div`
  overflow: hidden;
  background-color: ${grey1};
`;

const ShopDescriptionContainer = styled.div`
  width: 40%;
  margin: 0 auto;
`;

const ShopTitle = styled.div`
  font-size: 2.5rem;
  text-transform: uppercase;
`;
