import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {GiCancel} from "react-icons/gi";
import {ProductImage, ProductImageContainer} from "./ProductPage";
import {productPageShadow} from "./styles";

const FullScreeModal = ({isOpen, setIsModalOpen, currImg }) => {
  return <Modal isOpen={isOpen}>
      <ProductImage imageSrc={currImg}/>
  <ModalCloser onClick={() => setIsModalOpen(false)}/>
  </Modal>
}


const FullScreenImageContainer = styled.div`
  ${productPageShadow};
  width: 60%;
  height: 60%;
`

const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transform: translate(0, 50%);
  left: ${(props) => (props.isOpen ? '15vw' : '-70vw')};
  height: ${(props) => (props.isOpen ? '80vh' : '0')};
  width: 70vw;
  background-color: #ffffff;
  ${productPageShadow};
  z-index: 999;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: left .6s cubic-bezier(.62,-0.14,.62,1.25);
`

const ModalCloser = styled(GiCancel)`
  position: absolute;
  top: 23px;
  right: 25px;
  transform: scale(3);

  &:hover {
    cursor: pointer;
    transform: scale(3.5);
  }
`

export default FullScreeModal

