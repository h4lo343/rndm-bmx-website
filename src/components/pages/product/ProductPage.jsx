import React, {useEffect, useState} from "react";
import { Footer } from "../../common/Footer";
import { NavigationBar } from "../../common/NavigationBar";
import styled from "styled-components";
import { blackColor, BodyText, GeneralText, TitleText } from "../../../styles/commonStyles";
import BgdImage from "../../../assets/images/home/about_background.png";
import {useParams} from "react-router-dom";
import { productDetails } from "../handlers/productsDetails";
import { Magnifier } from "react-image-magnifiers";
import FullScreeModal from "./FullScreeModal";
import {FullSizeIcon, productPageShadow} from "./styles";
import OptionPanel from "./OptionPanel";
import PicCardSlider from "./PicCardSlider";

export const path = {
  'B': 'boyImages',
  'G': 'girlImages'
}

export const ProductPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { key } = useParams();
  const [currentProductKey, setCurrentProductKey] = useState(key)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [chosenGender, setChosenGender] = useState('B')
  const [currentModalImage, setCurrentModalImage] = useState()
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    setCurrentIndex(0)
  }, [chosenGender]);

  return (
    <ProductPageContainer>

      <FullScreeModal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} currImg={currentModalImage}/>
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
              <SliderContainer>
                <PicCardSlider
                  currentIndex={currentIndex}
                  setCurrentIndex={setCurrentIndex}
                  chosenGender={chosenGender}
                />
              </SliderContainer>
              <ProductImageContainer>
                <ProductImage
                  imageSrc={productDetails[currentProductKey][path[chosenGender]][currentIndex]}
                />
                <FullSizeIcon
                  onClick={() => {
                    setIsModalOpen(true)
                    setCurrentModalImage(productDetails[currentProductKey][path[chosenGender]][currentIndex])
                  }}
                  top={'13px'}
                  right={'13px'}/>
              </ProductImageContainer>
              <OptionPanel
                setCurrentImage={setCurrentModalImage}
                currProduct={productDetails[currentProductKey]}
                setChosenGender={setChosenGender}
                chosenGender={chosenGender}
                setIsModalOpen={setIsModalOpen}
                setCurrentModalImage={setCurrentModalImage}
              />
            </ShoppingSectionContainer>
          </ProductContainer>
          <Footer />
        </>
    </ProductPageContainer>
  );
};

const ProductPageContainer = styled.div`
`
const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  min-width: 30vw;
  flex-direction: column;
`;

export const ProductImageContainer = styled.div`
  position: relative;
  flex: 1 0 30rem;
  ${productPageShadow}
  & div {
    display: flex;
    height: 100%;
    align-items: center;
  }
`
const SliderContainer = styled.div`
  width: 10%;
  background-color: pink;
  padding: .7rem;
`;

export const ProductImage = styled(Magnifier)`
`

const ShoppingSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  gap: 10px;
  margin: .6rem 0;
  height: 30rem;
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
`;

