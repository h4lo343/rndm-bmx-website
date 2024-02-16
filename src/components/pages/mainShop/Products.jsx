import styled from 'styled-components';
import {
  grey1,
  priceColor,
  productPageShadow,
} from '../../../styles/commonStyles';
import MenuItem from '@mui/material/MenuItem';
import { Select } from '@mui/material';
import { useEffect, useState } from 'react';

export const Products = ({ data }) => {
  const [sortType, setSortType] = useState('Trending');
  const [sortedData, setSortedData] = useState(
    data.sort((a, b) => a.popularity - b.popularity)
  );
  useEffect(() => {
    if (sortType === 'Trending') {
      setSortedData([...data.sort((a, b) => a.popularity - b.popularity)]);
    } else {
      setSortedData([...data.sort((a, b) => a.price - b.price)]);
    }
  }, [sortType]);
  return (
    <ProductsContainer>
      <FunctionBar>
        <ProductName>Showing all {data.length} results</ProductName>
        <Select value={sortType} onChange={(e) => setSortType(e.target.value)}>
          <MenuItem value={'Trending'}>Trending</MenuItem>
          <MenuItem value={'Price'}>Price</MenuItem>
        </Select>
      </FunctionBar>
      <ProductsCardContainer>
        {sortedData.map((p) => (
          <ProductCard>
            <ProductImage src={p.image} />
            <ProductName>{p.name}</ProductName>
            <ProductPrice>${p.price}</ProductPrice>
          </ProductCard>
        ))}
      </ProductsCardContainer>
    </ProductsContainer>
  );
};

const ProductsCardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: left;
  position: relative;
`;

const FunctionBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 6rem;
  margin-bottom: 1rem;
  align-items: center;
`;

const ProductsContainer = styled.div``;

const ProductCard = styled.a`
  display: block;
  max-width: 100%;
  margin: 10px;
  overflow: hidden;
  width: calc(24% - 20px);
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1240px) {
    width: calc(30% - 20px);
  }

  @media (max-width: 900px) {
    width: calc(40% - 20px);
  }

  @media (max-width: 500px) {
    width: calc(100% - 20px);
  }
`;

const ProductImage = styled.img`
  border-radius: 20px;
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
