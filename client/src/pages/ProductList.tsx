import React, { useState, ChangeEvent } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Products/Products";
import * as s from "./productlistStyles";

const ProductList = () => {
  const location = useLocation();
  const currentCategory = location.pathname.split("/")[2] as string;
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("lowest");

  const handleFilters = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFilter({
      ...filter,
      [e.target.name]: value,
    });
  };

  return (
    <>
      <Navbar />
      <s.Container>
        <s.Title>
          <s.CategoryName>{currentCategory.toUpperCase()}</s.CategoryName>
        </s.Title>
        <s.FilterContainer>
          <s.Filter>
            <s.Select name="color" onChange={handleFilters}>
              <s.Option disabled>Color</s.Option>
              <s.Option>white</s.Option>
              <s.Option>black</s.Option>
              <s.Option>yellow</s.Option>
              <s.Option>red</s.Option>
              <s.Option>green</s.Option>
              <s.Option>blue</s.Option>
              <s.Option>brown</s.Option>
              <s.Option>multicolor</s.Option>
            </s.Select>
            <s.Select name="size" onChange={handleFilters}>
              <s.Option disabled>Size</s.Option>
              <s.Option>XS</s.Option>
              <s.Option>S</s.Option>
              <s.Option>M</s.Option>
              <s.Option>L</s.Option>
              <s.Option>XL</s.Option>
            </s.Select>
            {/* <s.Select name="price" onChange={handleFilters}>
              <s.Option disabled>Price</s.Option>
              <s.Option>0-99</s.Option>
              <s.Option>100-199</s.Option>
              <s.Option>200-299</s.Option>
              <s.Option>300-399</s.Option>
              <s.Option>399+</s.Option>
            </s.Select> */}
            <s.Select
              onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                setSort(e.target.value);
              }}
            >
              <s.Option value="lowest">Lowest price</s.Option>
              <s.Option value="highest">Highest price</s.Option>
            </s.Select>
          </s.Filter>
        </s.FilterContainer>
        <Products category={currentCategory} filter={filter} sort={sort} />
      </s.Container>
      <Footer />
    </>
  );
};

export default ProductList;
