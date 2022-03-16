import React from "react";
import * as s from "./shoppingcartStyles";
import { Add, Remove } from "@material-ui/icons";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const ShoppingCart = () => {
  return (
    <>
      <Navbar />
      <s.Wrapper>
        <s.Title>YOUR CART</s.Title>
        <s.Top>
          <s.TopButton>CONTINUE SHOPPING</s.TopButton>
        </s.Top>
        <s.Bottom>
          <s.Info>
            <s.Product>
              <s.ProductDetail>
                <s.Image src="https://www.cropp.com/media/catalog/product/2/5/2596K-99X-050-1.jpg" />
                <s.Details>
                  <s.ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </s.ProductName>
                  <s.ProductId>
                    <b>ID:</b> 93813718293
                  </s.ProductId>
                  <s.ProductColor color="black" />
                  <s.ProductSize>
                    <b>Size:</b> 37.5
                  </s.ProductSize>
                </s.Details>
              </s.ProductDetail>
              <s.PriceDetail>
                <s.ProductAmountContainer>
                  <Add />
                  <s.ProductAmount>2</s.ProductAmount>
                  <Remove />
                </s.ProductAmountContainer>
                <s.ProductPrice>$ 30</s.ProductPrice>
              </s.PriceDetail>
            </s.Product>
            <s.Hr />
            <s.Product>
              <s.ProductDetail>
                <s.Image src="https://www.cropp.com/media/catalog/product/2/5/2596K-99X-050-1.jpg" />
                <s.Details>
                  <s.ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </s.ProductName>
                  <s.ProductId>
                    <b>ID:</b> 93813718293
                  </s.ProductId>
                  <s.ProductColor color="black" />
                  <s.ProductSize>
                    <b>Size:</b> 37.5
                  </s.ProductSize>
                </s.Details>
              </s.ProductDetail>
              <s.PriceDetail>
                <s.ProductAmountContainer>
                  <Add />
                  <s.ProductAmount>2</s.ProductAmount>
                  <Remove />
                </s.ProductAmountContainer>
                <s.ProductPrice>$ 30</s.ProductPrice>
              </s.PriceDetail>
            </s.Product>
            <s.Hr />
            <s.Product>
              <s.ProductDetail>
                <s.Image src="https://www.cropp.com/media/catalog/product/2/5/2596K-99X-050-1.jpg" />
                <s.Details>
                  <s.ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </s.ProductName>
                  <s.ProductId>
                    <b>ID:</b> 93813718293
                  </s.ProductId>
                  <s.ProductColor color="black" />
                  <s.ProductSize>
                    <b>Size:</b> 37.5
                  </s.ProductSize>
                </s.Details>
              </s.ProductDetail>
              <s.PriceDetail>
                <s.ProductAmountContainer>
                  <Add />
                  <s.ProductAmount>2</s.ProductAmount>
                  <Remove />
                </s.ProductAmountContainer>
                <s.ProductPrice>$ 30</s.ProductPrice>
              </s.PriceDetail>
            </s.Product>
            <s.Hr />
            <s.Product>
              <s.ProductDetail>
                <s.Image src="https://www.cropp.com/media/catalog/product/2/5/2596K-99X-050-1.jpg" />
                <s.Details>
                  <s.ProductName>
                    <b>Product:</b> HAKURA T-SHIRT
                  </s.ProductName>
                  <s.ProductId>
                    <b>ID:</b> 93813718293
                  </s.ProductId>
                  <s.ProductColor color="gray" />
                  <s.ProductSize>
                    <b>Size:</b> M
                  </s.ProductSize>
                </s.Details>
              </s.ProductDetail>
              <s.PriceDetail>
                <s.ProductAmountContainer>
                  <Add />
                  <s.ProductAmount>1</s.ProductAmount>
                  <Remove />
                </s.ProductAmountContainer>
                <s.ProductPrice>$ 20</s.ProductPrice>
              </s.PriceDetail>
            </s.Product>
          </s.Info>
          <s.Summary>
            <s.SummaryTitle>ORDER SUMMARY</s.SummaryTitle>
            <s.SummaryItem>
              <s.SummaryItemText>Subtotal</s.SummaryItemText>
              <s.SummaryItemPrice>$ 80</s.SummaryItemPrice>
            </s.SummaryItem>
            <s.SummaryItem>
              <s.SummaryItemText>Estimated Shipping</s.SummaryItemText>
              <s.SummaryItemPrice>$ 5.90</s.SummaryItemPrice>
            </s.SummaryItem>
            <s.SummaryItem>
              <s.SummaryItemText>Shipping Discount</s.SummaryItemText>
              <s.SummaryItemPrice>$ -5.90</s.SummaryItemPrice>
            </s.SummaryItem>
            <s.SummaryItem group="total">
              <s.SummaryItemText>Total</s.SummaryItemText>
              <s.SummaryItemPrice>$ 80</s.SummaryItemPrice>
            </s.SummaryItem>
            <s.Button>CHECKOUT NOW</s.Button>
          </s.Summary>
        </s.Bottom>
      </s.Wrapper>
      <Footer width="narrow" />
    </>
  );
};

export default ShoppingCart;
