import React from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 600px;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({ height: "500px" })}
`;

const Title = styled.h1`
  font-size: 70px;
  margin: 20px;
  ${mobile({ fontSize: "50px" })}
`;
const Description = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: solid 1px lightgrey;
  ${mobile({ width: "80%" })}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 2;
  border: none;
  background-color: teal;
  color: white;
  ${mobile({ flex: 4 })}
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Get timely updates from your favourite Products.
      </Description>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <SendOutlinedIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
