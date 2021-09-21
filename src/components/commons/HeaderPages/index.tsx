import React from "react";
import { HeaderPagesContainer } from "./styles";

interface IPropsHeaderPages {
  pageTitle: string;
}

const HeaderPages: React.FC<IPropsHeaderPages> = ({ pageTitle }) => {
  return (
    <HeaderPagesContainer>
      <span>Dashboards</span>
      <h1>{pageTitle}</h1>
    </HeaderPagesContainer>
  );
};

export default HeaderPages;
