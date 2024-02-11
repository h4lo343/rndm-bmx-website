
import styled from "styled-components";
import { productDetails } from "../../pages/handlers/productsDetails"

import useEmblaCarousel from "embla-carousel-react";
import {path} from "./ProductPage";

const PicCardSlider = ({currentIndex, setCurrentIndex, chosenGender}) => {
  const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
    containScroll: "keepSnaps",
    axis: "y",
    dragFree: true,
  });

  const onThumbClick = (index) => {
    setCurrentIndex(index);
    emblaThumbs.scrollTo(index);
  };

  return (
    <SliderContainer>
      <PicCardViewport ref={thumbViewportRef}>
        <PicCardContainer>
          {
            productDetails.pin[path[chosenGender]].map((src, index) =>
              <SlideCardContainer
                key={index}
                selected = {currentIndex === index}
                onClick= {() => onThumbClick(index)}
              >
                <PicCardImage
                  src= { src }
                />
              </SlideCardContainer>
            )
          }
        </PicCardContainer>
      </PicCardViewport>

    </SliderContainer>
  );
}

export default PicCardSlider;

const picRadius = '15%'

const SliderContainer = styled.div`
  width:  100%;
  height: 100%;
  overflow: hidden;
  background-color: pink;
 
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
const PicCardViewport = styled.div`
  height: 100%;
  overflow: hidden;
`

const SlideCardContainer = styled.div`
  aspect-ratio: 1 / 1;
  margin-bottom: 10px;
  border-radius: ${picRadius};
  overflow: hidden;
  cursor: pointer;
  ${ (props) => !props.selected && `
    &:hover {
    border: 1px solid black;
    padding: 2px;
  }
  `
  }
  
  ${ (props) => props.selected  && `
    border: 2.5px solid black;
    padding: 4px;
  `}
  `

const PicCardContainer = styled.div`
  height: 100%;
`

const PicCardImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: ${picRadius};
`

