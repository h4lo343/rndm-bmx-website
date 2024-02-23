import React from 'react';
import styled from 'styled-components';
import { introProductDetails } from '../handlers/productsDetails';
import { Rating } from '@mui/material';
import { grey1, priceColor } from '../../../styles/commonStyles';
import { OriginalPriceBox } from './styles';

const RelatedProducts = () => {
  const renderPriceBox = (productObj) => {
    if (!productObj.discountedPrice) return <>${productObj.originalPrice}</>;
    else
      return (
        <>
          <OriginalPriceBox>${productObj.originalPrice}</OriginalPriceBox>$
          {productObj.discountedPrice}
        </>
      );
  };
  return (
    <RelatedProductsContainer>
      <ProductCardContainer>
        <SectionTitle>Related Products</SectionTitle>
        {Object.values(introProductDetails).map((p) => (
          <ProductCard>
            <ProductCardImg src={p.themeImage} disabled={true} />
            <div>{p.fullName}</div>
            <RatingContainer>
              <Rating value={p.rating} disabled={true} />
            </RatingContainer>
            <PriceContainer>{renderPriceBox(p)}</PriceContainer>
          </ProductCard>
        ))}
      </ProductCardContainer>
    </RelatedProductsContainer>
  );
};

export default RelatedProducts;

const RelatedProductsContainer = styled.div`
  padding: 1.5em;
`;

const RatingContainer = styled.div`
  text-align: left;
`;

const PriceContainer = styled.span`
  background-color: ${grey1};
  color: ${priceColor};
  padding: 0.3rem;
`;

const ProductCardImg = styled.img`
  width: 13rem;
  aspect-ratio: 1.7 / 1;
`;

const ProductCardContainer = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const ProductCard = styled.div`
  padding: 0.5rem;
  display: inline-block;
  margin-left: 1rem;
`;

const SectionTitle = styled.div`
  font-size: 1.3rem;
`;
