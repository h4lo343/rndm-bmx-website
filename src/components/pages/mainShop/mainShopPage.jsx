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
import { Products } from './Products';
import { mainShopProducts } from '../handlers/mainShopProducts';
import { FilterPanel } from './filterPanel';

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
      <TabBar>
        <Tab>general bmx</Tab>
        <Tab>rndm-bmx</Tab>
        <Tab>unique bmx</Tab>
        <Tab>exotic bmx</Tab>
      </TabBar>
      <MainContentContainer>
        <LeftColumn>
          <FilterPanel />
        </LeftColumn>
        <RightColumn>
          <Products data={mainShopProducts.generalBMX.products} />
        </RightColumn>
      </MainContentContainer>
    </MainShopPageContainer>
  );
};

const MainShopPageContainer = styled.div`
  overflow: hidden;
  background-color: ${grey1};
`;

const ShopDescriptionContainer = styled.div`
  width: 40rem;
  margin: 0 auto;
  @media (max-width: 650px) {
    width: 100%;
  }
`;

const ShopTitle = styled.div`
  font-size: 2.5rem;
  text-transform: uppercase;
`;

const TabBar = styled.div`
  height: 5rem;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  align-items: center;
  gap: 6rem;
  @media (max-width: 800px) {
    gap: 3rem;
    justify-content: space-evenly;
  }
`;

const Tab = styled.div`
  font-size: 1.7rem;

  &:hover {
    cursor: pointer;
  }

  text-transform: uppercase;
  @media (max-width: 800px) {
    font-size: 1.3rem;
  }

  @media (max-width: 550px) {
    font-size: 1rem;
  }
`;

const MainContentContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 98%;
  padding: 2rem;
`;

const LeftColumn = styled.div`
  width: 15%;
`;

const RightColumn = styled.div`
  background-color: inherit;
  width: 85%;
  padding: 20px;
`;
