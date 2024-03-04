import { useCartStore } from '../../../stores/useCartStore';
import { NavigationBar } from '../../common/NavigationBar';
import React, { useEffect, useMemo } from 'react';

import cartBgdImage from '../../../assets/images/cart/cart_background_image.JPG';
import {
  Banner,
  Button,
  priceColor,
  TitleText,
} from '../../../styles/commonStyles';
import styled from 'styled-components';
import { OriginalPriceBox } from '../product/styles';
import { DiscountedPriceBox } from '../product/OptionPanel';
import { useHistory } from 'react-router-dom';

export const CartPage = () => {
  useEffect(() => {
    window.scrollBy(0, 1);
  }, []);
  const history = useHistory();
  const { cart, deleteProduct } = useCartStore();
  const handleRemoveItem = (id) => {
    deleteProduct(id);
  };
  const totalPrice = useMemo(() => {
    const v = cart.reduce((acc, curr) => acc + curr.originalPrice, 0);
    return v;
  }, [cart]);
  const discount = useMemo(() => {
    const v = cart.reduce((acc, curr) => {
      if (curr.discountedPrice) {
        acc += curr.originalPrice - curr.discountedPrice;
      }
      return acc;
    }, 0);
    return v;
  }, [cart]);
  return (
    <CartPageContainer>
      <NavigationBar isHomePage={false} arrayToHandle={[]} />
      <Banner url={cartBgdImage} position={'50% 40%'} showOverlay={true}>
        <TitleText variant="h1">CART</TitleText>
      </Banner>
      <MainContentContainer>
        <ItemContainer>
          {cart.map((p) => (
            <ItemCell>
              <CellImage src={p.themeImage} />
              <CellDescription>
                <ProductName>{p.fullName}</ProductName>
                {p.gender && (
                  <div>
                    <Key>Gender: </Key> {p.gender}
                  </div>
                )}
                {p.type && (
                  <div>
                    <Key>Type: </Key> {p.type}
                  </div>
                )}
              </CellDescription>
              <PriceContainer>
                {p.discountedPrice ? (
                  <div>
                    <OriginalPriceBox>
                      {' '}
                      ${p.originalPrice.toFixed(2)}{' '}
                    </OriginalPriceBox>
                    <DiscountedPriceBox>
                      {' '}
                      ${p.discountedPrice}{' '}
                    </DiscountedPriceBox>
                  </div>
                ) : (
                  <div>
                    <DiscountedPriceBox>
                      {' '}
                      ${p.originalPrice}{' '}
                    </DiscountedPriceBox>
                  </div>
                )}
                <Remove onClick={() => handleRemoveItem(p.uuid)}>
                  {' '}
                  Remove
                </Remove>
              </PriceContainer>
            </ItemCell>
          ))}
        </ItemContainer>
        <CheckoutPanelContainer>
          <OrderSummary>Order Summary</OrderSummary>
          <Row>
            <Title>Item(s) total:</Title>
            <Price>${totalPrice.toFixed(2)}</Price>
          </Row>
          <Row>
            <Title>Item(s) discount:</Title>
            <Price>- ${discount.toFixed(2)}</Price>
          </Row>
          <Row border={true}>
            <Title>Total:</Title>
            <Price>${totalPrice - discount}</Price>
          </Row>
          <Row>
            <div></div>
            <Button
              width={'100%'}
              height={'1rem'}
              onClick={() => {
                history.push(`/checkout`);
              }}
            >
              CHECK OUT
            </Button>
          </Row>
        </CheckoutPanelContainer>
      </MainContentContainer>
    </CartPageContainer>
  );
};

const OrderSummary = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Price = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Title = styled.div`
  font-size: 1.5rem;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: ${(props) => (props.border ? '1px solid #ccc' : '')};
`;

const CartPageContainer = styled.div``;

const PriceContainer = styled.div`
  margin-left: auto;
  color: ${priceColor};
  text-align: right;
  @media (max-width: 850px) {
    margin: 0 auto;
  }
`;

const Remove = styled.div`
  display: inline-block;
  color: black;
  text-decoration: underline;
  cursor: pointer;
  font-size: 1.2rem;
`;

const ProductName = styled.div`
  font-size: 1.5rem;
  @media (max-width: 850px) {
    text-align: center;
  }
`;

const Key = styled.span`
  font-size: 1.5rem;
  color: grey;
  opacity: 0.5;
`;

const CellDescription = styled.div``;

const MainContentContainer = styled.div`
  height: 80vh;
  width: 80%;
  overflow: scroll;
  overflow-x: hidden;
  margin: 2rem auto 0 auto;
  display: flex;
  align-items: start;
  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const ItemContainer = styled.div`
  padding: 1rem;
  width: 60%;
`;

const CheckoutPanelContainer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  flex-grow: 1;
  text-align: left;
`;

const ItemCell = styled.div`
  height: 9rem;
  text-align: left;
  border-top: 1px solid #ccc;
  padding: 1rem 0 1rem 1rem;
  display: flex;
  gap: 1rem;
  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
  }
`;

const CellImage = styled.img`
  height: 9rem;
  display: block;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 20px;
  @media (max-width: 850px) {
    margin: 0 auto;
  }
`;
