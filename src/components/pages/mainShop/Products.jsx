import styled from 'styled-components';
import {
  grey1,
  priceColor,
  productPageShadow,
} from '../../../styles/commonStyles';
import MenuItem from '@mui/material/MenuItem';
import { Select } from '@mui/material';
import { useEffect, useState } from 'react';

export const Products = ({ data, dataSource, category }) => {
  const keys = Object.keys(dataSource);

  const [index, setIndex] = useState(0);
  const [pageData, setPageData] = useState(dataSource[keys[0]]);
  const [sortType, setSortType] = useState('Trending');

  const sortData = (arr) => {
    if (sortType === 'Trending') {
      return arr.sort((a, b) => a.popularity - b.popularity);
    } else {
      return arr.sort((a, b) => a.price - b.price);
    }
  };

  useEffect(() => {
    setPageData(dataSource[keys[index]]);
  }, [index]);

  const handlePageFlip = (type) => {
    if (type === 'reduce') {
      if (index === 0) {
        setIndex(keys.length - 1);
      } else setIndex(index - 1);
    } else {
      if (index === keys.length - 1) {
        setIndex(0);
      } else setIndex(index + 1);
    }
  };
  return (
    <ProductsContainer>
      <FunctionBar>
        <ProductName>Showing all {pageData.length} results</ProductName>
        <PageNumber>
          <PageNumberArrow onClick={() => handlePageFlip('reduce')}>
            &lt;
          </PageNumberArrow>
          {category ? keys[index] : Number(keys[index]) + 1}
          <PageNumberArrow onClick={() => handlePageFlip('increment')}>
            &gt;
          </PageNumberArrow>
        </PageNumber>
        <Select value={sortType} onChange={(e) => setSortType(e.target.value)}>
          <MenuItem value={'Trending'}>Trending</MenuItem>
          <MenuItem value={'Price'}>Price</MenuItem>
        </Select>
      </FunctionBar>
      <ProductsCardContainer>
        {sortData(pageData).map((p) => (
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

const PageNumberArrow = styled.span`
  :hover {
    cursor: pointer;
  }
`;

const FunctionBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 6rem;
  margin-bottom: 1rem;
  align-items: center;
`;

const PageNumber = styled.span`
  justify-self: center;
  font-size: 3rem;
  color: grey;
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
