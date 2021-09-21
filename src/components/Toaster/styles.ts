import styled from "styled-components";
import { ReactComponent as CloseIcon } from "../commons/svg/close-icon.svg";

export const ToasterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  top: 48px;
  width: 429px;
  height: 82px;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  overflow: hidden;

  div.decorator {
    background: #ef4444;
    width: 10px;
    height: 82px;
    left: 0px;
    top: 0px;
    margin-right: 16px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px 0px;
  width: 373px;
  height: 100%;

  div.message {
    margin-left: 8px;
  }
`;

export const IconClose = styled(CloseIcon)`
  position: absolute;
  inset: 10px 10px auto auto;
  cursor: pointer;
`;
