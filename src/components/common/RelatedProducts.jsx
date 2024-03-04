import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { introProductDetails } from '../pages/handlers/productsDetails';
import { Rating } from '@mui/material';
import { grey1, priceColor } from '../../styles/commonStyles';
import {
  LeftArrowIcon,
  OriginalPriceBox,
  RightArrowIcon,
} from '../pages/product/styles';
import { ArrowIconContainer } from '../pages/product/ProductPage';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { mainShopProducts } from '../pages/handlers/mainShopProducts';
import { useHistory } from 'react-router-dom';
import _ from 'lodash';

const RelatedProducts = ({ isIntro }) => {
  const [currProducts, setCurrProducts] = useState(() => {
    let a1 = _.shuffle([
      introProductDetails.pin,
      introProductDetails.post,
      introProductDetails.clamp,
    ]);
    a1 = [...a1, ...a1, ...a1];
    if (isIntro) {
      return a1;
    } else
      return _.shuffle([
        ...mainShopProducts.generalBMX.products,
        ...mainShopProducts.ExoticBMX.products,
        ...mainShopProducts.UniqueBMX.products,
        ...mainShopProducts.RNDMBMX.products,
      ]);
  });
  const [timeoutId, setTimeoutId] = useState(null);
  const [control, setControl] = useState(false);
  const history = useHistory();
  const handleArrowClick = (type) => {
    if (isIntro && !control) {
      setCurrProducts(
        _.shuffle([
          ...mainShopProducts.generalBMX.products,
          ...mainShopProducts.ExoticBMX.products,
          ...mainShopProducts.UniqueBMX.products,
          ...mainShopProducts.RNDMBMX.products,
        ])
      );
      setControl(true);
      const newTimeout = setTimeout(() => {
        setCurrProducts(
          _.shuffle([
            introProductDetails.pin,
            introProductDetails.post,
            introProductDetails.clamp,
          ])
        );
        setControl(false);
      }, 8000);
      setTimeoutId(newTimeout);
      return;
    }
    if (control) {
      clearTimeout(timeoutId);
      setControl(false);
      if (isIntro) {
        const newTimeout = setTimeout(() => {
          setCurrProducts(
            _.shuffle([
              introProductDetails.pin,
              introProductDetails.post,
              introProductDetails.clamp,
            ])
          );
          setControl(false);
        }, 8000);
        setTimeoutId(newTimeout);
      }
    }
    if (type === 'l') {
      emblaApi.scrollPrev();
      emblaApi.plugins().autoplay.stop();
      if (!isIntro) {
        const newTimeout = setTimeout(() => {
          emblaApi.plugins().autoplay.play();
          setControl(false);
        }, 8000);
        setTimeoutId(newTimeout);
      }
      setControl(true);
    } else {
      emblaApi.scrollNext();
      emblaApi.plugins().autoplay.stop();
      if (!isIntro) {
        const newTimeout = setTimeout(() => {
          emblaApi.plugins().autoplay.play();
          setControl(false);
        }, 8000);
        setTimeoutId(newTimeout);
      }
      setControl(true);
    }
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
    },
    [Autoplay({ playOnInit: false, delay: 3000 })]
  );
  useEffect(() => {
    setTimeout(() => {
      emblaApi?.plugins()?.autoplay.play();
    }, 1000);
  }, [emblaRef, emblaApi]);
  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

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
        <ProductZone>
          <ArrowContainer>
            <LeftArrowIcon onClick={() => handleArrowClick('l')} />
            <RightArrowIcon onClick={() => handleArrowClick('r')} />
          </ArrowContainer>
          <ViewPort ref={emblaRef}>
            <RelatedSectionContainer>
              {Object.values(currProducts).map((p, index) => (
                <ProductCard
                  key={index}
                  onClick={() => {
                    history.push(`/product/${p.fullName}`, {
                      productData: p,
                    });
                  }}
                >
                  <ProductCardImg src={p.themeImage} disabled={true} />
                  <div>{p.fullName}</div>
                  <RatingContainer>
                    <Rating value={p.rating} disabled={true} />
                  </RatingContainer>
                  <PriceContainer>{renderPriceBox(p)}</PriceContainer>
                </ProductCard>
              ))}
            </RelatedSectionContainer>
          </ViewPort>
        </ProductZone>
      </ProductCardContainer>
    </RelatedProductsContainer>
  );
};

export default RelatedProducts;

const RelatedProductsContainer = styled.div`
  padding: 1.5em;
  margin: auto;
  width: 100%;
`;

const ProductZone = styled.div`
  width: 45rem;
  @media (max-width: 800px) {
    width: 17rem;
  }
  margin: auto auto;
  position: relative;
`;

const RelatedSectionContainer = styled.div`
  display: flex;
`;

const ViewPort = styled.div`
  overflow: hidden;
`;

const ArrowContainer = styled.span`
  width: 105%;
  z-index: 1000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
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
  width: 70%;
  aspect-ratio: 1 / 1;
`;

const ProductCardContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const ProductCard = styled.div`
  flex: 0 0 14rem;

  padding: 0.5rem;
  display: inline-block;
  margin-left: 1rem;
  cursor: pointer;
`;

const SectionTitle = styled.div`
  font-size: 1.3rem;
`;
