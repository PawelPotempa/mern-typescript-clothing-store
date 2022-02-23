import React from "react";
import * as s from "./productsliderStyles";
import Slider from "react-slick";
import { ArrowBackRounded, ArrowForwardRounded } from "@material-ui/icons";
import { himProducts, herProducts } from "./productData";
import { useSelector } from "react-redux";
import { IProps } from "../BannerSlider/BannerSlider";

const ProductSlider = ({ position }: IProps) => {
  const genderState = useSelector((state: any) => state.gender);

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
      {genderState.gender === "her" && position === "top" ? (
        <Slider {...settings}>
          {herProducts.map((product, index) => {
            return (
              <s.SliderItem key={index}>
                <s.ProductImage src={product.url}></s.ProductImage>
                <s.ProductName>{product.name}</s.ProductName>
                <s.ProductPrice>{product.price} ZŁ</s.ProductPrice>
              </s.SliderItem>
            );
          })}
        </Slider>
      ) : genderState.gender === "him" && position === "top" ? (
        <Slider {...settings}>
          {himProducts.map((product, index) => {
            return (
              <s.SliderItem key={index}>
                <s.ProductImage src={product.url}></s.ProductImage>
                <s.ProductName>{product.name}</s.ProductName>
                <s.ProductPrice>{product.price} ZŁ</s.ProductPrice>
              </s.SliderItem>
            );
          })}
        </Slider>
      ) : (
        <Slider {...settings}>
          {himProducts.map((product, index) => {
            return (
              <s.SliderItem key={index}>
                <s.ProductImage src={product.url}></s.ProductImage>
                <s.ProductName>{product.name}</s.ProductName>
                <s.ProductPrice>{product.price} ZŁ</s.ProductPrice>
              </s.SliderItem>
            );
          })}
        </Slider>
      )}
    </s.Container>
  );
};

export default ProductSlider;
