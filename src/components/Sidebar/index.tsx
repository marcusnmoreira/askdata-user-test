import React, { useState } from "react";
import {
  SidebarContainer,
  SidebarWrapper,
  SetaContainer,
  MenuItem,
  NameMenuItem,
  Linha,
  LogoMenu,
} from "./styles";
import {
  RightIcon,
  LeftIcon,
  TimesIcon,
  VisaoIcon,
  ConfigIcon,
} from "../commons/svg";
import { useLocation } from "react-router";

const Sidebar: React.FC = () => {
  const [width, setWidth] = useState<boolean>(false);
  const { pathname } = useLocation<string>();

  return (
    <>
      <SidebarContainer expand={width}>
        <SidebarWrapper>
          <LogoMenu />
          <MenuItem
            to="/userarea/meustimes"
            isActive={pathname === "/userarea/meustimes"}
          >
            <TimesIcon />
            <NameMenuItem isOpen={width}>Meus Times</NameMenuItem>
          </MenuItem>
          <MenuItem
            to="/userarea/visao360"
            isActive={pathname === "/userarea/visao360"}
          >
            <VisaoIcon />
            <NameMenuItem isOpen={width}>Visão 360</NameMenuItem>
          </MenuItem>
          <MenuItem
            to="/userarea/configuracoes"
            isActive={pathname === "/userarea/configuracoes"}
          >
            <ConfigIcon />
            <NameMenuItem isOpen={width}>Configurações</NameMenuItem>
          </MenuItem>
        </SidebarWrapper>
        <Linha />
        <SetaContainer onClick={() => setWidth(!width)}>
          {width ? <LeftIcon /> : <RightIcon />}
        </SetaContainer>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
