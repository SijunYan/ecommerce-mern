import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ category, filters, sort }) => {
  // console.log(category, filters, sort);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  //===========================
  useEffect(() => {
    const getProducts = async () => {
      try {
        const url = category
          ? `http://localhost:5000/api/products?category=${category}`
          : "http://localhost:5000/api/products";
        const res = await fetch(url);
        if (!res.ok) throw new Error(`error: ${response.status}`);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    // this component used in both home page and category page, no filter on home page
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((pre) =>
        [...pre].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((pre) => [...pre].sort((a, b) => a.price - b.price));
    } else {
      setFilteredProducts((pre) => [...pre].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  // console.log("products");
  // console.log(products);
  // console.log("filteredProducts");
  // console.log(filteredProducts);

  return (
    <Container>
      {/* this component used in both home page and category page, no filter on home page */}
      {category
        ? filteredProducts.map((product) => (
            <Product product={product} key={product._id} />
          ))
        : products.map((product) => (
            <Product product={product} key={product._id} />
          ))}
    </Container>
  );
};

export default Products;
