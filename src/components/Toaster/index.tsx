import React from "react";
import { ContentWrapper, ToasterContainer, IconClose } from "./styles";
import { WarningIcon } from "../commons/svg";

interface IProps {
  onclick(): void;
}

const Toaster: React.FC<IProps> = ({ onclick, ...props }) => {
  return (
    <>
      <ToasterContainer>
        <div className="decorator" />
        <div>
          <ContentWrapper>
            <WarningIcon />
            <div className="message">
              <h3>Ocorreu algum erro</h3>
              <p>Verifique seu email ou senha</p>
            </div>
          </ContentWrapper>
        </div>
        <IconClose onClick={onclick} />
      </ToasterContainer>
    </>
  );
};

export default Toaster;
