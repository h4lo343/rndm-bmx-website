import React, {useEffect, useState} from "react";
import { Footer } from "../../common/Footer";
import { NavigationBar } from "../../common/NavigationBar";
import styled from "styled-components";
import {blackColor, BodyText, GeneralText, HeaderText, myFont, TitleText} from "../../../styles/commonStyles";
import BgdImage from "../../../assets/images/home/about_background.png";
import {useParams} from "react-router-dom";
import { SlSizeFullscreen } from "react-icons/sl";
import { productDetails } from "../handlers/productsDetails";
import {
  GlassMagnifier, Magnifier,
  MagnifierContainer
} from "react-image-magnifiers";
import FullScreeModal from "./FullScreeModal";
import {productPageShadow} from "./styles";



export const ProductPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { key } = useParams();
  const [currentProductKey, setCurrentProductKey] = useState(key)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <ProductPageContainer>
      <FullScreeModal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} currImg={productDetails[currentProductKey].boyImage}/>
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
              <ProductImageContainer>
                <ProductImage
                  imageSrc={productDetails[currentProductKey].boyImage}
                />
                <FullSizeIcon onClick={() => setIsModalOpen(true)}/>
              </ProductImageContainer>
              <OptionPanel/>
            </ShoppingSectionContainer>
          </ProductContainer>
          <Footer />
        </>
    </ProductPageContainer>
  );
};

const ProductPageContainer = styled.div`
  overflow: hidden;
`
const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.5rem auto;
  min-width: 30vw;
  flex-direction: column;
`;

export const ProductImageContainer = styled.div`
  position: relative;
  flex: 1 0 20rem;
  ${productPageShadow}
  & div {
    display: flex;
    height: 100%;
    align-items: center;
  }
`

const FullSizeIcon = styled(SlSizeFullscreen)`
  position: absolute;
  top: 13px;
  right: 13px;
  transform: scale(1.2);
  &:hover {
    cursor: pointer;
    transform: scale(1.5);
  }
`

const AdditionalImageCarousel = styled.div`
  width: 20%;
  background-color: pink;
`;

const OptionPanel = styled.div`
  width: 40%;
  background-color: aqua;
`;


export const ProductImage = styled(Magnifier)`
   
`

const ShoppingSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  gap: 10px;
  margin: 1rem 0;
  min-height: 20rem;
  align-items: stretch;
  @media (max-width: 900px) {
    width: 80%;
  }
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

