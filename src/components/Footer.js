import React from "react";
import styled from "styled-components";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  margin: 10px;
  ${mobile({ flexDirection: "column", margin: "0", marginTop: "20px" })};
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  ${mobile({ marginBottom: "20px", padding: "0 20px" })};
`;
const Logo = styled.h1`
  font-family: "Brush Script MT", cursive;
  font-weight: bold;
`;
const Description = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

//=============== center ====================
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
//=================== Right ===================
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#FCF5F5" })}
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;
const Text = styled.p`
  margin-left: 10px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>A.M.Z</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur,
          voluptatem laborum vero harum quasi provident amet eveniet,
          recusandae, voluptate impedit ipsa ex est iusto. Facilis placeat
          repudiandae labore eligendi autem.
        </Description>
        <SocialContainer>
          <SocialIcon color="#e4405f">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="#3b5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="#55acee">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="#e60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOnIcon />
          <Text>Address</Text>
        </ContactItem>
        <ContactItem>
          <PhoneIcon />
          <Text>+61 435 252 321</Text>
        </ContactItem>
        <ContactItem>
          <EmailIcon />
          <Text>contact@jide.com</Text>
        </ContactItem>
        <Payment src="https://www.uskip.com/img/payment-methods.png" />
      </Right>
    </Container>
  );
};

export default Footer;
