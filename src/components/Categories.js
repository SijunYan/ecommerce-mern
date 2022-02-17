import React from "react";
import styled from "styled-components";
import CategoryItems from "./CategoryItems";
import { categories } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: 0, flexDirection: "column" })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((cate) => (
        <CategoryItems cate={cate} key={cate.id}></CategoryItems>
      ))}
    </Container>
  );
};

export default Categories;
