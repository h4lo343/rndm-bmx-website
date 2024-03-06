import styled from 'styled-components';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { useCartStore } from '../../stores/useCartStore';
import { useHistory, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Clickable } from '../../styles/commonStyles';

export const CartButton = () => {
  const history = useHistory();
  const location = useLocation();
  const { cart } = useCartStore();
  return (
    <CartButtonContainer
      onClick={() => {
        history.push(`/cart`);
      }}
      show={
        !(location.pathname === '/cart' || location.pathname === '/checkout') &&
        cart.length
      }
    >
      <NumberContainer>
        <span>{cart.length}</span>{' '}
      </NumberContainer>
      <CartIcon />
    </CartButtonContainer>
  );
};

const CartButtonContainer = styled.div`
  background-color: #fff;
  display: ${(props) => (props.show ? 'block' : 'none')};
  height: 6rem;
  width: 6rem;
  bottom: 2rem;
  right: 2rem;
  z-index: 2000;
  text-align: center;
  border-radius: 50%;
  position: fixed;
  cursor: pointer;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1);
  ${Clickable}
`;

const NumberContainer = styled.div`
  z-index: 3000;
  line-height: 30px;
  text-align: center;
  border-radius: 50%;
  position: absolute;
  width: 30px;
  height: 30px;
  font-size: 1.4rem;
  background-color: red;
  color: #fff;
`;

const CartIcon = styled(HiOutlineShoppingCart)`
  transform: scale(4);
  position: relative;
  top: 3rem;
`;
