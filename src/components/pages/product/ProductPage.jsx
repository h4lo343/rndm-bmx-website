import React, { useEffect, useState } from 'react';
import { Footer } from '../../common/Footer';
import { NavigationBar } from '../../common/NavigationBar';
import styled from 'styled-components';
import {
  Banner,
  blackColor,
  BodyText,
  GeneralText,
  grey1,
  productPageShadow,
  TitleText,
  verticalCentral,
} from '../../../styles/commonStyles';
import introBgdImage from '../../../assets/images/products/IntroProduct_background_image.jpg';
import commonBgdImage from '../../../assets/images/products/commonProduct_background_image.jpg';
import { useParams } from 'react-router-dom';
import { introProductDetails } from '../handlers/productsDetails';
import { Magnifier } from 'react-image-magnifiers';
import FullScreeModal from './FullScreeModal';
import {
  BottomArrowIcon,
  FullSizeIcon,
  LeftArrowIcon,
  productPageResponsiveThreshold1,
  productPageResponsiveThreshold2,
  RightArrowIcon,
  TopArrowIcon,
} from './styles';
import OptionPanel from './OptionPanel';
import PicCardSlider from './PicCardSlider';
import RelatedProducts from '../../common/RelatedProducts';
import { useCartStore } from '../../../stores/useCartStore';

export const path = {
  B: 'boyImages',
  G: 'girlImages',
};

export const ProductPage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const productData = props.location.state.productData;

  const isCommon = !productData.intro;

  const { key } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chosenGender, setChosenGender] = useState('B');
  const [currentModalImage, setCurrentModalImage] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentType, setCurrentType] = useState(productData['types'][0]);

  const [currentImageSet, setCurrentImageSet] = useState([
    ...productData['images'][currentType][[path[chosenGender]]],
    ...productData['images'][currentType]['common'],
  ]);
  useEffect(() => {
    setCurrentImageSet([
      ...productData['images'][currentType][[path[chosenGender]]],
      ...productData['images'][currentType]['common'],
    ]);
  }, [chosenGender, currentType, key]);

  const handleArrowClick = (direction) => {
    let temp = currentIndex;
    const imgCount = currentImageSet.length;
    direction === 'back' ? (temp -= 1) : (temp += 1);
    if (temp < 0) temp = imgCount - 1;
    if (temp === imgCount) temp = 0;
    setCurrentIndex(temp);
  };
  useEffect(() => {
    setCurrentIndex(0);
  }, [chosenGender]);

  return (
    <ProductPageContainer>
      <FullScreeModal
        isOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        currImg={currentModalImage}
      />
      <>
        <NavigationBar isHomePage={false} arrayToHandle={[]} />
        <Banner
          url={isCommon ? commonBgdImage : introBgdImage}
          position={'50% 40%'}
          showOverlay={true}
        >
          <TitleText variant="h1">
            {isCommon ? 'PRODUCTS' : 'INTRO PRODUCTS'}
          </TitleText>
        </Banner>
        <ProductContainer>
          <ProductionDesContainer>
            <ProductTitle>{productData.fullName}</ProductTitle>
            <GeneralText color={blackColor} textAlign={'left'}>
              {productData.description}
            </GeneralText>
          </ProductionDesContainer>
          <ShoppingSectionContainer>
            <SliderContainer>
              <TopArrowIcon onClick={() => handleArrowClick('back')} />
              <BottomArrowIcon onClick={() => handleArrowClick('forth')} />
              <PicCardSlider
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                chosenGender={chosenGender}
                imageSet={currentImageSet}
              />
            </SliderContainer>
            <ProductImageContainer>
              <ProductImage imageSrc={currentImageSet[currentIndex]} />
              <FullSizeIcon
                onClick={() => {
                  setIsModalOpen(true);
                  setCurrentModalImage(currentImageSet[currentIndex]);
                }}
                top={'13px'}
                right={'13px'}
              />
              <ArrowIconContainer>
                <LeftArrowIcon onClick={() => handleArrowClick('back')} />
                <RightArrowIcon onClick={() => handleArrowClick('forth')} />
              </ArrowIconContainer>
            </ProductImageContainer>
            <OptionPanel
              setCurrentImage={setCurrentModalImage}
              currProduct={productData}
              setChosenGender={setChosenGender}
              chosenGender={chosenGender}
              setIsModalOpen={setIsModalOpen}
              setCurrentModalImage={setCurrentModalImage}
              currentType={currentType}
              setCurrentType={setCurrentType}
            />
          </ShoppingSectionContainer>
        </ProductContainer>
        <RelatedProducts isIntro={!isCommon} />
        <Footer />
      </>
    </ProductPageContainer>
  );
};

const ProductPageContainer = styled.div``;

const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${grey1};
  padding: 2.5rem 0;
`;

export const ArrowIconContainer = styled.span`
  position: absolute;
  display: flex;
  height: 0;
  justify-content: space-between;
  width: 110%;

  ${verticalCentral}
`;

export const ProductImageContainer = styled.div`
  position: relative;
  width: 31rem;
  aspect-ratio: 1 / 1;
  border-radius: 5px;
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
`;

const ShoppingSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  margin: 0.6rem 0;
  align-items: stretch;
  @media (max-width: ${productPageResponsiveThreshold1}) {
    padding: 0 3rem;
  }
  @media (max-width: ${productPageResponsiveThreshold2}) {
    flex-direction: column;
  }
`;

const SliderContainer = styled.div`
  width: 5rem;
  height: 30rem;
  padding: 0.7rem;
  position: relative;
  text-align: center;
  align-self: start;
  @media (max-width: ${productPageResponsiveThreshold1}) {
    display: none;
  }
`;

export const ProductImage = styled(Magnifier)`
  width: 100%;
`;

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
`;
