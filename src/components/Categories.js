import React from "react";
import styled from "styled-components";
import CategoryItems from "./CategoryItems";
import { categories } from "../data";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
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
