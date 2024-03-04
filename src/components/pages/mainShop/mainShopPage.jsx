import React, { useEffect, useState } from 'react';
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
import { useHistory, useParams } from 'react-router-dom';
import { pagination } from './utility/pagination';

export const MainShopPage = () => {
  const history = useHistory();
  const [modalOpen, setModalOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const { category } = useParams();
  const [dataSource, setDataSource] = useState(
    pagination(category, [
      ...mainShopProducts.generalBMX.products,
      ...mainShopProducts.ExoticBMX.products,
      ...mainShopProducts.UniqueBMX.products,
      ...mainShopProducts.RNDMBMX.products,
    ])
  );
  useEffect(() => {
    if (!category) {
      setDataSource(
        pagination(category, [
          ...mainShopProducts.generalBMX.products,
          ...mainShopProducts.ExoticBMX.products,
          ...mainShopProducts.UniqueBMX.products,
          ...mainShopProducts.RNDMBMX.products,
        ])
      );
    } else {
      setDataSource(
        pagination(category, [...mainShopProducts[category].products])
      );
    }
  }, [category]);
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <MainShopPageContainer>
      <NavigationBar isHomePage={false} arrayToHandle={[]} />
      <Banner url={BgdImage} position={'50% 15%'} showOverlay={true}></Banner>
      <ShopDescriptionContainer>
        <ShopTitle onClick={() => history.push('/mainShop')}>shop</ShopTitle>
        <GeneralText color={blackColor} textAlign={'left'}>
          Welcome to the SHOP Page. Click/Tap a Sub-catagory below to be taken
          to that desired part of the Shop or click on a particular Product
          Image to find out more about the particular Item.
        </GeneralText>
      </ShopDescriptionContainer>
      <TabBar>
        <Tab
          onClick={() => {
            setIndex(0);
            history.push(`/mainShop/generalBMX`);
          }}
          chosen={category === 'generalBMX'}
          color={'orange'}
        >
          general bmx
        </Tab>
        <Tab
          onClick={() => {
            setIndex(0);
            history.push(`/mainShop/RNDMBMX`);
          }}
          chosen={category === 'RNDMBMX'}
          color={'blue'}
        >
          rndm-bmx
        </Tab>
        <Tab
          onClick={() => {
            setIndex(0);
            history.push(`/mainShop/UniqueBMX`);
          }}
          chosen={category === 'UniqueBMX'}
          color={'green'}
        >
          unique bmx
        </Tab>
        <Tab
          onClick={() => {
            setIndex(0);
            history.push(`/mainShop/ExoticBMX`);
          }}
          chosen={category === 'ExoticBMX'}
          color={'red'}
        >
          exotic bmx
        </Tab>
      </TabBar>
      <MainContentContainer>
        <FilterButton onClick={() => setModalOpen(true)}>Filter</FilterButton>
        <LeftColumn>
          <FilterPanel modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </LeftColumn>
        <RightColumn>
          <Products
            dataSource={dataSource}
            category={category}
            index={index}
            setIndex={setIndex}
          />
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
  cursor: pointer;
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
  color: ${(props) => (props.chosen ? props.color : 'inherit')};
  &:hover {
    cursor: pointer;
  }

  text-transform: uppercase;
  @media (max-width: 800px) {
    font-size: 1.3rem;
  }
`;

const MainContentContainer = styled.div`
  display: flex;
  gap: 1rem;
  position: relative;
  padding: 2rem;
`;

const FilterButton = styled.a`
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: none;
  font-size: 2rem;
  border: 1px solid black;
  padding: 0.3rem 0.2rem;
  margin: 0;
  cursor: pointer;
  @media (max-width: 700px) {
    display: inline-block;
  }
`;

const LeftColumn = styled.div`
  width: 15%;
  @media (max-width: 700px) {
    width: 0;
  }
`;

const RightColumn = styled.div`
  background-color: inherit;
  width: 100%;
  padding: 20px;
  margin: 0 auto;
`;
