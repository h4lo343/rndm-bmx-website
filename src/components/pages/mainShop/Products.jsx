import styled from 'styled-components';
import {
  grey1,
  priceColor,
  productPageShadow,
} from '../../../styles/commonStyles';

export const Products = ({ data }) => {
  return (
    <ProductsContainer>
      {data.map((p) => (
        <ProductCard>
          <ProductImage src={p.image} />
          <ProductName>{p.name}</ProductName>
          <ProductPrice>${p.price}</ProductPrice>
        </ProductCard>
      ))}
    </ProductsContainer>
  );
};

const ProductsContainer = styled.div`
  display: flex;
  margin: 40px;
  width: 100%;
  flex-flow: row wrap;
  justify-content: left;
`;

const ProductCard = styled.a`
  display: block;
  border-radius: 5%;
  max-width: 100%;
  margin: 10px;
  overflow: hidden;
  width: calc(25% - 20px);
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1240px) {
    width: calc(33% - 20px);
  }

  @media (max-width: 900px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 500px) {
    width: calc(100% - 20px);
  }
`;

const ProductImage = styled.img`
  border: none;
  display: inline-block;
  max-width: 100%;
  ${productPageShadow};
`;

const ProductName = styled.div`
  text-align: left;
  font-size: 1.4rem;
`;

const ProductPrice = styled.div`
  text-align: left;
  font-size: 1.4rem;
  color: ${priceColor};
`;
