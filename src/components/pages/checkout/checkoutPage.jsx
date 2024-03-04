import { NavigationBar } from '../../common/NavigationBar';
import React from 'react';
import styled from 'styled-components';
import { Checkbox, Form, Input, Select } from 'antd';
import { Banner, Button, TitleText } from '../../../styles/commonStyles';
import { Option } from 'antd/es/mentions';

import checkoutBgdImage from '../../../assets/images/checkout/checkout_background_image.JPG';

import { useCartStore } from '../../../stores/useCartStore';

export const CheckoutPage = () => {
  const { cart, cleanCart } = useCartStore();
  const handlePayment = async (e) => {};
  return (
    <>
      <NavigationBar isHomePage={false} arrayToHandle={[]} />
      <Banner url={checkoutBgdImage} position={'50% 40%'} showOverlay={true}>
        <TitleText variant="h1">CHECKOUT</TitleText>
      </Banner>
      <CheckOutTitle>Check out</CheckOutTitle>
      <CheckOutForm onFinish={handlePayment}>
        <FormTitle>EMAIL ✱</FormTitle>
        <Item
          name={['email']}
          rules={[
            {
              required: true,
              message: 'Please input valid email!',
              type: 'email',
            },
          ]}
        >
          <FormlInput placeholder="Email" style={{ width: '22rem' }} />
        </Item>
        <FormTitle>PHONE NUMBER ✱</FormTitle>
        <Item
          name={['phoneNumber']}
          rules={[
            {
              pattern: new RegExp('^04\\d{8}$'),
              message: `Please input a valid Australian phone number`,
            },
          ]}
        >
          <FormlInput placeholder="Phone number" style={{ width: '22rem' }} />
        </Item>
        <FormTitle>FIRST NAME ✱</FormTitle>
        <Item
          name={['firstName']}
          rules={[
            {
              required: true,
              message: 'Please input your first name!',
            },
          ]}
        >
          <FormlInput placeholder="First Name" />
        </Item>
        <FormTitle>LAST NAME ✱</FormTitle>
        <Item
          name={['lastName']}
          rules={[
            {
              required: true,
              message: 'Please input your last name!',
            },
          ]}
        >
          <FormlInput placeholder="LastName Name" />
        </Item>
        <FormTitle>State ✱</FormTitle>
        <Item
          name={['address', 'state']}
          rules={[{ required: true, message: 'State is required' }]}
          style={{ width: '20rem' }}
        >
          <FormSelect placeholder="Select State">
            <FormOption value="Queensland">Queensland</FormOption>
            <FormOption value="Tasmania">Tasmania</FormOption>
            <FormOption value="Victoria">Victoria</FormOption>
            <FormOption value="Northern_Territory">
              Northern Territory
            </FormOption>
            <FormOption value="Western_Australia">Western Australia</FormOption>
            <FormOption value="Australian_Capital_Territory">
              Australian Capital Territory
            </FormOption>
          </FormSelect>
        </Item>
        <FormTitle>Address 1</FormTitle>
        <Item
          name={['address', 'street']}
          rules={[{ required: true, message: 'Street is required' }]}
        >
          <FormlInput style={{ width: '25rem' }} placeholder="Input street" />
        </Item>
        <FormTitle>Address 2(Optional)</FormTitle>
        <Item name={['address', 'street2']}>
          <FormlInput
            style={{ width: '25rem' }}
            placeholder="Input additional address"
          />
        </Item>
        <Form.Item wrapperCol={{ offset: 10 }} style={{ marginTop: '5rem' }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ padding: '.7rem 1.5rem' }}
          >
            PAY
          </Button>
        </Form.Item>
      </CheckOutForm>
      <Form></Form>
    </>
  );
};

const CheckOutTitle = styled.div`
  font-size: 3rem;
`;

const FormTitle = styled.div`
  font-size: 1.5rem;
`;

const Item = styled(Form.Item)``;

const FormSelect = styled(Select)`
  height: 3rem;

  & .ant-select-selection-placeholder {
    font-size: 1.5rem;
  }

  & .ant-select-selection-item {
    font-size: 1.5rem;
  }
`;

const FormlInput = styled(Input)`
  height: 2.4rem;
  width: 15rem;
  font-size: 1.5rem;
  &::placeholder {
    font-size: 1.5rem;
    line-height: 3rem;
  }
`;

const FormOption = styled(Option)`
  font-size: 1.5rem;
`;

const CheckOutForm = styled(Form)`
  text-align: left;
  width: 50%;
  margin: 0 auto;
  @media (max-width: 550px) {
    width: 100%;
    margin: 0;
  }

  .ant-form-item-explain-error {
    font-size: 1.3rem;
  }
`;
