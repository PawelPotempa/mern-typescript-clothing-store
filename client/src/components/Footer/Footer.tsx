import React from "react";
import * as s from "./footerStyles";
import { Facebook, Twitter, Instagram } from "@material-ui/icons";
import { footerCategories } from "../footerData";
import FooterDropdown from "../FooterDropdown/FooterDropdown";

export interface IProps {
  width?: string;
}

const Footer = ({ width }: IProps) => {
  return (
    <s.Container width={width}>
      <s.Categories>
        {footerCategories.map((category, index) => {
          return (
            <FooterDropdown key={index} category={category} width={width} />
          );
        })}
      </s.Categories>
      <s.Social>
        <s.Icon>
          <Instagram style={{ fontSize: 48 }} />
        </s.Icon>
        <s.Icon>
          <Facebook style={{ fontSize: 48 }} />
        </s.Icon>
        <s.Icon>
          <Twitter style={{ fontSize: 48 }} />
        </s.Icon>
      </s.Social>
    </s.Container>
  );
};

export default Footer;
