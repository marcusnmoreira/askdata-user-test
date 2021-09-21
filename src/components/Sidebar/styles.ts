import styled, { css } from "styled-components";
import { Logo } from "../commons/svg";
import { Link } from "../commons/StyledLink/StyledLink";

interface IPropsContainer {
  expand: boolean;
}

interface IPropsNameMenuItem {
  isOpen: boolean;
}

interface IPropsLink {
  isActive?: boolean;
}

export const SidebarContainer = styled.header<IPropsContainer>`
  width: ${({ expand }) => (expand ? "230px" : "80px")};
  height: 100vh;
  background-color: #111827;
  position: fixed;
  transition: 0.2s ease-out;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;

export const SidebarWrapper = styled.div`
  width: auto;
  height: auto;
  /* margin: 1rem; */
  overflow: hidden;
`;

export const MenuItem = styled(Link)<IPropsLink>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  width: 300px;
  padding: 1rem 1.5rem;
  margin-bottom: 0rem;

  ${({ isActive }) =>
    isActive && isActive
      ? css`
          -webkit-box-shadow: inset 4px 0px 0px 0px var(--primaryColor);
          box-shadow: inset 4px 0px 0px 0px var(--primaryColor);
        `
      : css``}

  &:hover {
    background-color: #115e59;
    transition: background-color 0.2s ease-in-out;
  }
`;

export const NameMenuItem = styled.h3<IPropsNameMenuItem>`
  color: white;
  margin-left: 1rem;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

export const SetaContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
  padding: 1rem 1.7rem 1rem 0;
  cursor: pointer;

  &:hover {
    background-color: #115e59;
    transition: 0.2s ease-in-out;
  }
`;

export const Linha = styled.hr`
  border: 1px solid #4b5563;
`;

export const LogoMenu = styled(Logo)`
  margin: 1rem 0 3rem 1rem;
  width: 46px;
`;
