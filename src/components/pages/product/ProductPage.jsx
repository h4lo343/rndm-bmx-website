import React, {useEffect, useState} from "react";
import { Footer } from "../../common/Footer";
import { NavigationBar } from "../../common/NavigationBar";
import styled from "styled-components";
import {blackColor, BodyText, GeneralText, TitleText, verticalCentral} from "../../../styles/commonStyles";
import BgdImage from "../../../assets/images/home/about_background.png";
import {useParams} from "react-router-dom";
import { productDetails } from "../handlers/productsDetails";
import { Magnifier } from "react-image-magnifiers";
import FullScreeModal from "./FullScreeModal";
import {
  BottomArrowIcon,
  FullSizeIcon,
  LeftArrowIcon,
  productPageResponsiveThreshold1, productPageResponsiveThreshold2,
  productPageShadow,
  RightArrowIcon,
  TopArrowIcon
} from "./styles";
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

  const handleArrowClick = (direction) => {
      let temp = currentIndex
      const imgCount = productDetails[currentProductKey][path[chosenGender]].length
      direction === 'back' ? temp -= 1 : temp += 1;
      if(temp < 0) temp = imgCount - 1;
      if(temp === imgCount) temp = 0;

      setCurrentIndex(temp)
  }
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
                <TopArrowIcon onClick={() => handleArrowClick('back')}/>
                <BottomArrowIcon onClick={() => handleArrowClick('forth')}/>
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
                <ArrowIconContainer>
                  <LeftArrowIcon onClick={() => handleArrowClick('back')}/>
                  <RightArrowIcon onClick={() => handleArrowClick('forth')}/>
                </ArrowIconContainer>
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
  overflow: hidden;
`

const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.5rem auto;
  flex-direction: column;
`;

const ArrowIconContainer = styled.span`
  position: absolute;
  display: flex;
  height: 0;
  justify-content: space-between;
  width: 110%;
 
  ${verticalCentral}
`

export const ProductImageContainer = styled.div`
  position: relative;
  width: 31rem;
  aspect-ratio:  1 / 1;
  ${productPageShadow};
  
  & div {
    display: flex;
    height: 100%;
    align-items: center;
  }
  
  @media (max-width: ${productPageResponsiveThreshold1}) {
     width: 60%;
  }

  @media (max-width: ${productPageResponsiveThreshold2}) {
    width: 100%;
  }
`

const ShoppingSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  margin: .6rem 0;
  
  align-items: center;
  @media (max-width: ${productPageResponsiveThreshold1}) {
    padding: 0 3rem;
  }
  @media (max-width: ${productPageResponsiveThreshold2}) {
    flex-direction: column;
  }
`

const SliderContainer = styled.div`
  width: 5rem;
  padding: .7rem;
  position: relative;
  text-align: center;
  @media (max-width: ${productPageResponsiveThreshold1}) {
    display: none;
  }
`;

export const ProductImage = styled(Magnifier)`
`

const ProductTitle = styled(BodyText)`
  font-size: 2rem !important;
  text-decoration: underline;
  text-decoration-thickness: 2.5px;
  text-transform: uppercase;
`;

const ProductionDesContainer = styled.div`
  width: 40%;
  margin-bottom: 3vw;
  @media (max-width: 1024px) {
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
 
  height: 50vh;
  background: url(${BgdImage});
  background-size: cover !important;
`;

