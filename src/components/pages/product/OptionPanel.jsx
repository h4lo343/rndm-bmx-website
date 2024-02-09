import styled from "styled-components";


const OptionPanel = ({currProduct}) => {

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
    </OptionPanelContainer>
  )
}

const titleFontSize = '20px'
const rowMargin = '5px'

const OptionPanelContainer = styled.div`
  width: 40%;
  background-color: aqua;
  padding: 10px;
  text-align: left;
`;

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
  display: flex;
  justify-content: space-between;
  color: rgb(161, 173, 61);
  margin-bottom: ${rowMargin};
  padding-right: 2rem;
`

export default OptionPanel
