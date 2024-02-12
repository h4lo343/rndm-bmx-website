import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {GiCancel} from "react-icons/gi";
import {ProductImage, ProductImageContainer} from "./ProductPage";
import {productPageResponsiveThreshold1, productPageShadow} from "./styles";
import {Box, Modal} from "@mui/material";
import {modalStyle1} from "../../common/Footer";
import {Privacy, Return} from "../../common/Text";
import { verticalCentral } from "../../../styles/commonStyles";

const FullScreeModal = ({isOpen, setIsModalOpen, currImg }) => {

  return  <Modal  open={isOpen} onClose={() => {}}>
    <ModalContainer>
      <FullScreenImage src={currImg}/>
      <ModalCloser onClick={() => setIsModalOpen(false)}/>
    </ModalContainer>
  </Modal>
}


const FullScreenImage = styled.img`
  width: 90%;
  aspect-ratio: 1.5 / 1;
  object-fit: fill;
  @media (max-width: ${productPageResponsiveThreshold1}) {
    aspect-ratio: 1.5 / 1;
  }
`

const ModalContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  padding: 4rem;
  width: 58vw;
  aspect-ratio: 1.93 / 1;
  background-color: #ffffff;
  ${productPageShadow};
  z-index: 100;
  
  ${verticalCentral};
  @media (max-width: ${productPageResponsiveThreshold1}) {
    width: 88vw;
    padding: 1rem;
  }
`

const ModalCloser = styled(GiCancel)`
  position: absolute;
  top: 23px;
  right: 25px;
  transform: scale(3);
  z-index: 200;

  &:hover {
    cursor: pointer;
    transform: scale(3.5);
  }
`

export default FullScreeModal

