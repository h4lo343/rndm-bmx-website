import React, {useEffect, useState} from "react";
import { Footer } from "../../common/Footer";
import { NavigationBar } from "../../common/NavigationBar";
import styled from "styled-components";
import {blackColor, BodyText, GeneralText, grey1, TitleText, verticalCentral} from "../../../styles/commonStyles";
import BgdImage from "../../../assets/images/products/IntroProduct_background_image.jpg";
import {useParams} from "react-router-dom";
import { introProductDetails } from "../handlers/productsDetails";
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
import RelatedProducts from "./RelatedProducts";

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
  const [currentType, setCurrentType] = useState(introProductDetails[currentProductKey]['types'][0])

  const [currentImageSet, setCurrentImageSet] = useState([
      ...introProductDetails[key]['images'][currentType][[path[chosenGender]]],
      ...introProductDetails[key]['images'][currentType]['common'],
      ]
    );
  useEffect(() => {
    setCurrentImageSet([
      ...introProductDetails[key]['images'][currentType][[path[chosenGender]]],
      ...introProductDetails[key]['images'][currentType]['common'],
    ]
    )
  }, [chosenGender, currentType, key]);




    const handleArrowClick = (direction) => {
      let temp = currentIndex
      const imgCount = currentImageSet.length
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
              <ProductTitle>{introProductDetails[key].fullName}</ProductTitle>
              <GeneralText color={blackColor} textAlign={"left"}>
                {introProductDetails[key].description}
              </GeneralText>
            </ProductionDesContainer>
            <ShoppingSectionContainer>
              <SliderContainer>
                <PicCardSlider
                  currentIndex={currentIndex}
                  setCurrentIndex={setCurrentIndex}
                  chosenGender={chosenGender}
                  imageSet={currentImageSet}
                />
                <TopArrowIcon onClick={() => handleArrowClick('back')}/>
                <BottomArrowIcon onClick={() => handleArrowClick('forth')}/>
              </SliderContainer>
              <ProductImageContainer>
                <ProductImage
                  imageSrc={currentImageSet[currentIndex]}
                />
                <FullSizeIcon
                  onClick={() => {
                    setIsModalOpen(true)
                    setCurrentModalImage(currentImageSet[currentIndex])
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
                currProduct={introProductDetails[currentProductKey]}
                setChosenGender={setChosenGender}
                chosenGender={chosenGender}
                setIsModalOpen={setIsModalOpen}
                setCurrentModalImage={setCurrentModalImage}
                currentType={currentType}
                setCurrentType={setCurrentType}
              />
            </ShoppingSectionContainer>
          </ProductContainer>
          <RelatedProducts/>
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
  flex-direction: column;
  background-color: ${ grey1 };
  padding: 2.5rem 0;
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
  align-self: start;
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
  background-position: 50% 40%;
`;

