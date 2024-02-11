import styled from "styled-components";
import {FlexBetween, FullSizeIcon} from "./styles";
import {Button, priceColor} from "../../../styles/commonStyles";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {
  Magnifier
} from "react-image-magnifiers";
import {productDetails} from "../handlers/productsDetails";


const OptionPanel = ({
                       currProduct,
                       chosenGender,
                       setChosenGender,
                       setCurrentModalImage,
                       setIsModalOpen,
                       }) => {

  return (
    <OptionPanelContainer>
      <Title>{currProduct.fullName}</Title>
      <PriceContainer>
        <div><CurrPriceBox> ${currProduct.currPrice} </CurrPriceBox></div>
        <div>
          <OriginalPriceBox> ${currProduct.originalPrice.toFixed(2)} </OriginalPriceBox>
          <DiscountedPriceBox> ${currProduct.currPrice} </DiscountedPriceBox>
        </div>
      </PriceContainer>
      <Title>Gender:</Title>
      <AddCartContainer>
        <div>
          <GenderOption
            color={'rgb(9, 162, 230)'}
            chosen={chosenGender === 'B'}
            onClick={() => {
              setChosenGender('B')

          }}>B</GenderOption>
          <GenderOption
            color={'rgb(235, 133, 231)'}
            chosen={chosenGender === 'G'}
            onClick={() => {
              setChosenGender('G')

            }}>G</GenderOption>
        </div>
        <div>
          <Button width={'3rem'} height={'1rem'}>Add To Cart</Button>
        </div>
      </AddCartContainer>
      <Title>Types:</Title>
      <Select>
        {
          currProduct.types.map(product => <MenuItem value={product}>{product}</MenuItem>)
        }
      </Select>
      <SpecContainer>
        <Title>Specs: </Title>
        <Magnifier imageSrc={currProduct.specImage}></Magnifier>
        <FullSizeIcon
          top={'40px'}
          right={'13px'}
          onClick={() => {
            setCurrentModalImage(currProduct.specImage)
            setIsModalOpen(true)
        }}/>
      </SpecContainer>

    </OptionPanelContainer>
  )
}

const titleFontSize = '20px'
const rowMargin = '5px'

const OptionPanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 10px 10px 0 10px;
  text-align: left;
  
  
`;

const SpecImage = styled.img`
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
`

const Title = styled.div`
  font-size: ${titleFontSize};
  margin-bottom: ${rowMargin};
`

const CurrPriceBox = styled.div`
  font-size: ${titleFontSize};
`
const DiscountedPriceBox = styled.span`
  font-family: "Arial";
  font-weight: bold;
  font-size: 30px
`

const OriginalPriceBox = styled.span`
  font-family: "Arial";
  font-size: 15px;
  text-decoration: line-through;
  opacity: .5;
  margin-right: 5px;
`

const PriceContainer = styled.div`
  ${FlexBetween};
  color: ${priceColor};
  margin-bottom: ${rowMargin};
  padding-right: 2rem;
`

const AddCartContainer = styled.div`
  ${FlexBetween};
  margin-bottom: ${rowMargin};
`

const SpecContainer = styled.div`
  position: relative;
  margin-top: auto;
  overflow: hidden;
`

const GenderOption = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${props => props.color};
  text-align: center;
  font-size: 25px;
  margin-right: 15px;
  color: #ffffff;
  cursor: pointer;
  ${
  props => props.chosen && `
  outline: 4px solid ${priceColor};
  outline-offset: 1px;
  `
  }
`

export default OptionPanel
