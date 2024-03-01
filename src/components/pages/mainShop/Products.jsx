import styled from 'styled-components';
import {
  grey1,
  priceColor,
  productPageShadow,
} from '../../../styles/commonStyles';
import MenuItem from '@mui/material/MenuItem';
import { Select } from '@mui/material';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export const Products = ({ dataSource, category, index, setIndex }) => {
  const history = useHistory();
  const keys = Object.keys(dataSource).sort();
  const [pageData, setPageData] = useState(dataSource[keys[0]]);
  const [sortType, setSortType] = useState('Trending');
  const [cardNum, setCardNum] = useState(0);
  const directToProductPage = (p) => {
    history.push(`/product/${p.fullName}`, {
      productData: p,
      commonProduct: true,
    });
  };
  useEffect(() => {
    const cardDivs = document.querySelectorAll('div[aria-label="card"]');
    const cardCount = cardDivs.length;
    setCardNum(cardCount);
  });
  const sortData = (arr) => {
    if (!arr) return;
    if (sortType === 'Trending') {
      return arr.sort((a, b) => a.popularity - b.popularity);
    } else {
      return arr.sort((a, b) => a.price - b.price);
    }
  };

  useEffect(() => {
    if (Object.keys(dataSource).length === 0) {
      setPageData([]);
    } else setPageData(dataSource[keys[index]]);
  }, [index, dataSource]);

  const handlePageFlip = (type) => {
    if (keys.length) {
      if (type === 'reduce') {
        if (index === 0) {
          setIndex(keys.length - 1);
        } else setIndex(index - 1);
      } else {
        if (index === keys.length - 1) {
          setIndex(0);
        } else setIndex(index + 1);
      }
    }
  };

  return (
    <ProductsContainer>
      <FunctionBar>
        <ProductName>Showing {cardNum} results</ProductName>
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
        {category
          ? Object?.keys(pageData)
              .sort((a, b) => a - b)
              .map((key) => {
                return (
                  <>
                    <Subcategory>{key}</Subcategory>
                    <ProductsCardContainer>
                      {pageData[key]?.length &&
                        sortData(pageData[key])?.map((p) => (
                          <ProductCard onClick={() => directToProductPage(p)}>
                            <div aria-label={'card'}>
                              <ProductImage src={p.themeImage} />
                              <ProductName>{p.fullName}</ProductName>
                              <ProductPrice>
                                ${p.discountedPrice || p.originalPrice}
                              </ProductPrice>
                            </div>
                          </ProductCard>
                        ))}
                    </ProductsCardContainer>
                  </>
                );
              })
          : pageData?.length &&
            sortData(pageData).map((p) => (
              <ProductCard onClick={() => directToProductPage(p)}>
                <div aria-label={'card'}>
                  <ProductImage src={p.themeImage} />
                  <ProductName>{p.fullName}</ProductName>
                  <ProductPrice>
                    {' '}
                    ${p.discountedPrice || p.originalPrice}
                  </ProductPrice>
                </div>
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
  align-items: stretch;
  padding: 0 6rem;
  margin-bottom: 1rem;

  @media (max-width: 700px) {
    flex-direction: column;
    padding: 0;
  }
`;

const Subcategory = styled.div`
  font-size: 2rem;
  color: grey;
  width: 100%;
  text-align: left;
`;

const PageNumber = styled.span`
  justify-self: center;
  font-size: 3rem;
  color: grey;
`;

const ProductsContainer = styled.div``;

const ProductCard = styled.a.attrs({
  ariaLabel: 'card',
})`
  display: block;
  max-width: 100%;
  margin: 10px;
  overflow: hidden;
  width: calc(24% - 20px);
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 1240px) {
    width: calc(30% - 20px);
  }

  @media (max-width: 1000px) {
    width: calc(40% - 20px);
  }

  @media (max-width: 700px) {
    width: 100%;
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
  @media (max-width: 700px) {
    text-align: center;
  }
`;

const ProductPrice = styled.div`
  text-align: left;
  font-size: 1.4rem;
  color: ${priceColor};
  @media (max-width: 700px) {
    text-align: center;
  }
`;
