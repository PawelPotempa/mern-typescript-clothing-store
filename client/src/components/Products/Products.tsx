import React, { useEffect, useState } from "react";
import * as s from "./productsStyles";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

interface IProps {
  category?: string;
  filter?: {
    color?: string;
    size?: string;
    price?: string;
  };
  sort?: string;
}

const Products = ({ category, filter, sort }: IProps) => {
  const genderState = useSelector((state: any) => state.gender);

  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          !category || category === "new" || category === "sale"
            ? `http://localhost:5001/api/products?category=${genderState.gender}`
            : `http://localhost:5001/api/products?category=${category}&category=${genderState.gender}`
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [category, genderState.gender]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filter!).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [category, filter, products]);

  useEffect(() => {
    if (sort === "lowest" && products) {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort, products]);

  return (
    <>
      {category ? (
        <s.ProductsGrid>
          {filteredProducts.map((product, index) => {
            return (
              <Link key={index} to={`/${genderState.gender}/${product._id}`}>
                <s.SliderItem key={index}>
                  <s.ProductImage src={product.img}></s.ProductImage>
                  <s.ProductName>{product.title}</s.ProductName>
                  <s.ProductPrice>{product.price} ZŁ</s.ProductPrice>
                </s.SliderItem>
              </Link>
            );
          })}
        </s.ProductsGrid>
      ) : (
        <>
          {products.map((product, index) => {
            return (
              <Link key={index} to={`/her/${product._id}`}>
                <s.SliderItem>
                  <s.ProductImage src={product.img}></s.ProductImage>
                  <s.ProductName>{product.title}</s.ProductName>
                  <s.ProductPrice>{product.price} ZŁ</s.ProductPrice>
                </s.SliderItem>
              </Link>
            );
          })}
        </>
      )}
    </>
  );
};

export default Products;
