import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { herProducts } from "../components/ProductSlider/productData";
import * as s from "./productlistStyles";

const ProductList = () => {
  return (
    <>
      <Navbar />
      <s.Container>
        <s.Title>
          <s.CategoryName>SHOES</s.CategoryName>
          <s.ItemAmount>(64 products)</s.ItemAmount>
        </s.Title>
        <s.FilterContainer>
          <s.Filter>
            <s.Select>
              <s.Option disabled selected>
                Color
              </s.Option>
              <s.Option>White</s.Option>
              <s.Option>Black</s.Option>
              <s.Option>Yellow</s.Option>
              <s.Option>Red</s.Option>
              <s.Option>Green</s.Option>
              <s.Option>Blue</s.Option>
            </s.Select>
            <s.Select>
              <s.Option disabled selected>
                Size
              </s.Option>
              <s.Option>XS</s.Option>
              <s.Option>S</s.Option>
              <s.Option>M</s.Option>
              <s.Option>L</s.Option>
              <s.Option>XL</s.Option>
            </s.Select>
            <s.Select>
              <s.Option disabled selected>
                Price
              </s.Option>
              <s.Option>0-99</s.Option>
              <s.Option>100-199</s.Option>
              <s.Option>200-299</s.Option>
              <s.Option>300-399</s.Option>
              <s.Option>399+</s.Option>
            </s.Select>
            <s.Select>
              <s.Option selected>Lowest price</s.Option>
              <s.Option>Highest price</s.Option>
            </s.Select>
          </s.Filter>
        </s.FilterContainer>
        <s.ProductsGrid>
          {herProducts.map((product, index) => {
            return (
              <s.SliderItem key={index}>
                <s.ProductImage src={product.url}></s.ProductImage>
                <s.ProductName>{product.name}</s.ProductName>
                <s.ProductPrice>{product.price} ZŁ</s.ProductPrice>
              </s.SliderItem>
            );
          })}
        </s.ProductsGrid>
      </s.Container>
      <Footer />
    </>
  );
};

export default ProductList;
