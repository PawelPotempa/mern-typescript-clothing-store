import React from "react";
import * as s from "./singleproductStyles";
import Slider from "react-slick";
import {
  Add,
  ArrowBackRounded,
  ArrowForwardRounded,
  Remove,
} from "@material-ui/icons";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Product = () => {
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
    slidesToShow: 1.5,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <ArrowBack />,
    nextArrow: <ArrowForward />,
  };

  return (
    <s.Container>
      <Navbar />
      <s.Wrapper>
        <s.SliderContainer>
          <Slider {...settings}>
            <s.ProductImage src="https://i.ibb.co/S6qMxwr/jean.jpg"></s.ProductImage>
            <s.ProductImage src="https://i.ibb.co/S6qMxwr/jean.jpg"></s.ProductImage>
            <s.ProductImage src="https://i.ibb.co/S6qMxwr/jean.jpg"></s.ProductImage>
            <s.ProductImage src="https://i.ibb.co/S6qMxwr/jean.jpg"></s.ProductImage>
            <s.ProductImage src="https://i.ibb.co/S6qMxwr/jean.jpg"></s.ProductImage>
          </Slider>
        </s.SliderContainer>
        <s.InfoContainer>
          <s.Title>Denim Jumpsuit</s.Title>
          <s.Price>$20</s.Price>
          <s.Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </s.Description>
          <s.FilterContainer>
            <s.Filter>
              <s.FilterColor color="darkblue" />
              <s.FilterColor color="black" />
              <s.FilterColor color="gray" />
            </s.Filter>
            <s.Filter>
              <s.FilterTitle>Size</s.FilterTitle>
              <s.FilterSize>
                <s.FilterSizeOption>XS</s.FilterSizeOption>
                <s.FilterSizeOption>S</s.FilterSizeOption>
                <s.FilterSizeOption>M</s.FilterSizeOption>
                <s.FilterSizeOption>L</s.FilterSizeOption>
                <s.FilterSizeOption>XL</s.FilterSizeOption>
              </s.FilterSize>
            </s.Filter>
          </s.FilterContainer>
          <s.AddContainer>
            <s.AmountContainer>
              <Remove />
              <s.Amount>1</s.Amount>
              <Add />
            </s.AmountContainer>
            <s.Button>ADD TO CART</s.Button>
          </s.AddContainer>
        </s.InfoContainer>
      </s.Wrapper>
      <Footer />
    </s.Container>
  );
};

export default Product;
