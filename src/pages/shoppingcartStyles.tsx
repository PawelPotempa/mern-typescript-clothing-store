import styled from "styled-components";
import { device } from "../mediaQueries";

interface IProps {
  group?: string;
}

export const Wrapper = styled.div`
  padding-top: 100px;

  ${device.tablet`
  padding-top: 60px;
  `}
`;

export const Title = styled.h1`
  font-weight: 300;
  text-align: center;

  ${device.tablet`
  width: 70%;
  `}
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  ${device.tablet`
  width: 70%;
  `}
`;

export const TopButton = styled.button<IProps>`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.group === "filled" && "none"};
  background-color: ${(props) =>
    props.group === "filled" ? "black" : "transparent"};
  color: ${(props) => props.group === "filled" && "white"};
`;

export const TopTexts = styled.div`
  display: none;
  ${device.tablet`
  display: block
  `}
`;

export const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  ${device.tablet`
  // flex-direction: row
  max-width: 70%;
  `}
`;

export const Info = styled.div`
  flex: 3;
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  ${device.tablet`
  flex-direction: row
  `}
`;

export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

export const Image = styled.img`
  width: 200px;
`;

export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ProductName = styled.span``;

export const ProductId = styled.span``;

export const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

export const ProductSize = styled.span``;

export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  margin: 5px 15px;

  ${device.tablet`
      margin: 5px;
      `}
`;

export const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  margin-bottom: 20px;

  ${device.tablet`
      margin-bottom: 0px;
      `}
`;

export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

export const Summary = styled.div`
  right: 0;
  top: 40px;
  background-color: white;
  border-top: 0.5px solid lightgray;
  padding: 20px;

  ${device.tablet`
  position: fixed;
  width: 30%;
  height: calc(100vh - 40px);
  border-left: 0.5px solid lightgray;
  border-top: none;
  `}
`;

export const SummaryTitle = styled.h1`
  font-weight: 200;
`;

export const SummaryItem = styled.div<IProps>`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.group === "total" && "500"};
  font-size: ${(props) => props.group === "total" && "24px"};
`;

export const SummaryItemText = styled.span``;

export const SummaryItemPrice = styled.span``;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
