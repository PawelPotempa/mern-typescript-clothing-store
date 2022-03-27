import React, { useEffect, useState } from "react";
import * as s from "./productsliderStyles";
import Slider from "react-slick";
import { ArrowBackRounded, ArrowForwardRounded } from "@material-ui/icons";
import { centerProducts } from "./productData";
import { useSelector } from "react-redux";
import { IProps } from "../BannerSlider/BannerSlider";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductSlider = ({ position }: IProps) => {
  const genderState = useSelector((state: any) => state.gender);

  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          genderState.gender === "her"
            ? "http://localhost:5001/api/products?category=her"
            : genderState.gender === "him"
            ? "http://localhost:5001/api/products?category=him"
            : "http://localhost:5001/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [genderState]);

  // Add react-slick custom back button
  const ArrowBack = (props: any) => {
    const { onClick } = props;
    return (
      <s.ArrowContainer onClick={onClick}>
        <ArrowBackRounded style={{ fontSize: 48 }} />
      </s.ArrowContainer>
    );
  };

  // Add react-slick custom forward button
  const ArrowForward = (props: any) => {
    const { onClick } = props;
    return (
      <s.ArrowContainer onClick={onClick}>
        <ArrowForwardRounded style={{ fontSize: 48 }} />
      </s.ArrowContainer>
    );
  };

  // Add react-slick settings
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 3,
    initialSlide: 0,
    prevArrow: <ArrowBack />,
    nextArrow: <ArrowForward />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Display products based on ProductSlider "position" property.
  // TODO: Allow for manipulation of displayed products directly from admin dashboard
  // (select products, pop them into a new array, map that array depending on ProductSlider "position" property)
  return (
    <s.Container banner={position}>
      {position === "top" && products.length > 0 ? (
        <Slider {...settings}>
          {products.map((product, index) => {
            return (
              <Link key={index} to={`/${genderState.gender}/${product._id}`}>
                <s.SliderItem>
                  <s.ProductImage src={product.img}></s.ProductImage>
                  <s.ProductName>{product.title}</s.ProductName>
                  <s.ProductPrice>{product.price} ZŁ</s.ProductPrice>
                </s.SliderItem>
              </Link>
            );
          })}
        </Slider>
      ) : (
        <Slider {...settings}>
          {centerProducts.map((product, index) => {
            return (
              <Link key={index} to={`/unisex/${product._id}`}>
                <s.SliderItem>
                  <s.ProductImage src={product.url}></s.ProductImage>
                  <s.ProductName>{product.name}</s.ProductName>
                  <s.ProductPrice>{product.price} ZŁ</s.ProductPrice>
                </s.SliderItem>
              </Link>
            );
          })}
        </Slider>
      )}
    </s.Container>
  );
};

export default ProductSlider;
