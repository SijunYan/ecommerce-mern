import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Payment = (props) => {
  return (
    <Container>
      <Elements options={props.options} stripe={props.stripe}>
        <CheckoutForm />
      </Elements>
    </Container>
  );
};

export default Payment;
