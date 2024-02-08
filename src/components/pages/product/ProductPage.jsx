import React, {useEffect, useState} from "react";
import { Footer } from "../../common/Footer";
import { NavigationBar } from "../../common/NavigationBar";
import styled from "styled-components";
import {blackColor, BodyText, GeneralText, HeaderText, myFont, TitleText} from "../../../styles/commonStyles";
import BgdImage from "../../../assets/images/home/about_background.png";
import {useParams} from "react-router-dom";
import { Box, Container, Grid } from "@mui/material";
import { productDetails } from "../handlers/productsDetails";
import {
  GlassMagnifier,
  MagnifierContainer
} from "react-image-magnifiers";



export const ProductPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const productImg = document.querySelector('.example-class').querySelector('img');

    productImg.style.objectFit = 'fill';
    productImg.style.height = '100%';
    console.log(productImg.style)
  }, []);
  const { key } = useParams();
  const [currentProductKey, setCurrentProductKey] = useState(key)
  console.log(productDetails[currentProductKey].boyImage)
  return (
    <>
      <NavigationBar isHomePage={false} arrayToHandle={[]} />
      <Banner>
        <TitleText variant="h1">
          INTRO PRODUCTS
        </TitleText>
      </Banner>

      <ProductContainer>
        <ProductionDesContainer>
          <ProductTitle>{productDetails[currentProductKey].fullName}</ProductTitle>
          <GeneralText color={blackColor} textAlign={"left"}>
            {productDetails[currentProductKey].description}
          </GeneralText>
        </ProductionDesContainer>

        <ShoppingSectionContainer>
          <AdditionalImageCarousel/>
          <ProductImageContainer className={'example-class'}>
              <ProductImage
                imageSrc={productDetails[currentProductKey].boyImage}
                magnifierSize= { '40%' }
                alwaysInPlace={true}
              />
          </ProductImageContainer>

          <OptionPanel/>
        </ShoppingSectionContainer>
      </ProductContainer>
      <Footer />
    </>
  );
};

const ProductContainer = styled.div`
  display: flex;
  
  justify-content: center;
  align-items: center;
  margin: 2.5rem auto;
  min-width: 30vw;
  flex-direction: column;
`;

const ProductImageContainer = styled.div`
  flex: 0 0 1;
 
`

const AdditionalImageCarousel = styled.div`
  width: 15rem;
  background-color: pink;
`;

const OptionPanel = styled.div`
  width: 35rem;
  background-color: aqua;
`;


const ProductImage = styled(GlassMagnifier)`
  height: 100%;
  width: 100%;
`

const ShoppingSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
  gap: 10px;
  min-height: 20rem;
  align-items: stretch;
`

const ProductTitle = styled(BodyText)`
  font-size: 2rem !important;
  text-decoration: underline;
  text-decoration-thickness: 2.5px;
  text-transform: uppercase;
`;

const ProductionDesContainer = styled.div`
  width: 30%;
  @media (max-width: 728px) {
    width: 70%;
  }
`

const Banner = styled.div`
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100vw;
  height: 50vh;
  background: url(${BgdImage});
  background-size: cover !important;
  background-color: red;
`;

