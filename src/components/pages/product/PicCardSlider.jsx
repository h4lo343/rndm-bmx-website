import styled from 'styled-components';

import { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const PicCardSlider = ({ currentIndex, setCurrentIndex, imageSet }) => {
  const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    axis: 'y',
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaThumbs) {
        return;
      }
      console.log(emblaThumbs.scrollSnapList());
      setCurrentIndex(index);
      emblaThumbs.scrollTo(index);
    },
    [emblaThumbs]
  );

  useEffect(() => {
    if (emblaThumbs) onThumbClick(currentIndex);
  }, [currentIndex]);

  return (
    <SliderContainer>
      <PicCardViewport ref={thumbViewportRef}>
        <PicCardContainer>
          {imageSet.map((src, index) => (
            <SlideCardContainer
              key={index}
              selected={currentIndex === index}
              onClick={() => onThumbClick(index)}
            >
              <PicCardImage src={src} />
            </SlideCardContainer>
          ))}
        </PicCardContainer>
      </PicCardViewport>
    </SliderContainer>
  );
};

export default PicCardSlider;

const picRadius = '15%';

const SliderContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const PicCardViewport = styled.div`
  overflow: hidden;
`;

const SlideCardContainer = styled.div`
  flex: 0 0 30%;
  aspect-ratio: 1 / 1;
  margin-bottom: 10px;
  border-radius: ${picRadius};

  cursor: pointer;
  ${(props) =>
    !props.selected &&
    `
    &:hover {
    border: 1px solid black;
    padding: 2px;
  }
  `}

  ${(props) =>
    props.selected &&
    `
    border: 2.5px solid black;
    padding: 4px;
  `}
`;

const PicCardContainer = styled.div`
  height: 100%;
`;

const PicCardImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: ${picRadius};
  transform: scale(1);
  transition: all 0.2s;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
