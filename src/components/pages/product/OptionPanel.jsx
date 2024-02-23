import styled from 'styled-components';
import {
  FlexBetween,
  FullSizeIcon,
  originalPrice,
  OriginalPriceBox,
  productPageResponsiveThreshold1,
  productPageResponsiveThreshold2,
} from './styles';
import { Button, priceColor } from '../../../styles/commonStyles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Magnifier } from 'react-image-magnifiers';
import { introProductDetails } from '../handlers/productsDetails';

const OptionPanel = ({
  currProduct,
  chosenGender,
  setChosenGender,
  setCurrentModalImage,
  setIsModalOpen,
  currentType,
  setCurrentType,
}) => {
  return (
    <OptionPanelContainer>
      <Title>{currProduct.fullName}</Title>
      <PriceContainer>
        <div>
          <CurrPriceBox> ${currProduct.discountedPrice} </CurrPriceBox>
        </div>
        <div>
          <OriginalPriceBox>
            {' '}
            ${currProduct.originalPrice.toFixed(2)}{' '}
          </OriginalPriceBox>
          <DiscountedPriceBox>
            {' '}
            ${currProduct.discountedPrice}{' '}
          </DiscountedPriceBox>
        </div>
      </PriceContainer>
      <Title>Gender:</Title>
      <AddCartContainer>
        <div>
          <GenderOption
            color={'rgb(9, 162, 230)'}
            chosen={chosenGender === 'B'}
            onClick={() => {
              setChosenGender('B');
            }}
          >
            B
          </GenderOption>
          <GenderOption
            color={'rgb(235, 133, 231)'}
            chosen={chosenGender === 'G'}
            onClick={() => {
              setChosenGender('G');
            }}
          >
            G
          </GenderOption>
        </div>
        <div>
          <Button width={'3rem'} height={'1rem'}>
            Add To Cart
          </Button>
        </div>
      </AddCartContainer>
      <Title>Types:</Title>
      <Select
        onChange={(e) => setCurrentType(e.target.value)}
        value={currentType}
      >
        {currProduct.types.map((type) => (
          <MenuItem value={type}>{type}</MenuItem>
        ))}
      </Select>
      {currProduct['images'][currentType]['specImage'] && (
        <SpecContainer>
          <Title>Specs: </Title>
          <Magnifier
            imageSrc={currProduct['images'][currentType]['specImage']}
          ></Magnifier>
          <FullSizeIcon
            top={'40px'}
            right={'13px'}
            onClick={() => {
              setCurrentModalImage(
                currProduct['images'][currentType]['specImage']
              );
              setIsModalOpen(true);
            }}
          />
        </SpecContainer>
      )}
    </OptionPanelContainer>
  );
};

const titleFontSize = '20px';
const rowMargin = '5px';

const OptionPanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 100%;
  padding: 10px 10px 0 10px;
  text-align: left;
  @media (max-width: ${productPageResponsiveThreshold1}) {
    width: 40%;
  }
  @media (max-width: ${productPageResponsiveThreshold2}) {
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: ${titleFontSize};
  margin-bottom: ${rowMargin};
`;

const CurrPriceBox = styled.div`
  font-size: ${titleFontSize};
`;
const DiscountedPriceBox = styled.span`
  font-family: 'Arial';
  font-weight: bold;
  font-size: 30px;
`;

const PriceContainer = styled.div`
  ${FlexBetween};
  color: ${priceColor};
  margin-bottom: ${rowMargin};
  padding-right: 2rem;
`;

const AddCartContainer = styled.div`
  ${FlexBetween};
  margin-bottom: ${rowMargin};
`;

const SpecContainer = styled.div`
  position: relative;
  margin-top: auto;
  overflow: hidden;
`;

const GenderOption = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  text-align: center;
  font-size: 25px;
  margin-right: 15px;
  color: #ffffff;
  cursor: pointer;
  ${(props) =>
    props.chosen &&
    `
  outline: 4px solid ${priceColor};
  outline-offset: 1px;
  `}
`;

export default OptionPanel;
