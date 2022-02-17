import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 69px;
  ${mobile({ height: "60px" })}
`;

const Wrapper = styled.div`
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px 0" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: solid 0.5px lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  font-size: 16px;
  &:focus {
    outline: none;
  }
  ${mobile({ width: "50%", fontSize: "12px" })}
`;
// ============= center ===================
const Center = styled.div`
  flex: 2;
  text-align: center;
  ${mobile({ flex: 1 })}
`;
const Logo = styled.h2`
  font-family: "Brush Script MT", cursive;
  font-weight: bold;
  ${mobile({ fontSize: "24px", marginLeft: "20px" })}
`;

// ============= right ===================
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
  flex-shrink: 0;
  font-size: 14px;
  cursor: pointer;
  margin: 0 20px;
  ${mobile({ fontSize: "12px", marginLeft: "10px", marginRight: "0" })}
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "grey", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>A.M.Z</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
