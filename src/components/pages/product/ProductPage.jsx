import React, {useEffect, useState} from "react";
import { Footer } from "../../common/Footer";
import { NavigationBar } from "../../common/NavigationBar";
import { Container } from "@mui/material";
import styled from "styled-components";
import {TitleText} from "../../common/styles";
import BgdImage from "../../../assets/images/home/about_background.png";
import {useParams} from "react-router-dom";
import { productDetails } from "../handlers/productsDetails";

export const ProductPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { key } = useParams();
  const [currentProductKey, setCurrentProductKey] = useState(key)

  return (
    <>
      <NavigationBar isHomePage={false} arrayToHandle={[]} />
      <Banner>
        <TitleText variant="h1">
          INTRO PRODUCTS
        </TitleText>
      </Banner>

      <ProductContainer>
        {productDetails[currentProductKey].fullName}
        {productDetails[currentProductKey].description}
      </ProductContainer>
      <Footer />
    </>
  );
};

const ProductContainer = styled(Container)`
  display: flex;
  align-items: center;
  min-width: 100vw;
  min-height: 60vh;
`;

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
