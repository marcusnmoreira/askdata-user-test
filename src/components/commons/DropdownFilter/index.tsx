import React, { useState } from "react";
import { DropdownWrapper, Button, DropdownListWrapper } from "./styles";
import { DownIcon } from "../svg/index";

interface IPropsDropdownFilter {
  label: string;
}

const DropdownFilter: React.FC<IPropsDropdownFilter> = ({ label }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <DropdownWrapper>
      <p>{label}</p>
      <div style={{ position: "relative" }}>
        <Button onClick={() => setIsOpen(!isOpen)}>
          <span>Semestre</span>
          <DownIcon />
        </Button>
        {isOpen && (
          <DropdownListWrapper>
            <ul style={{ listStyleType: "none" }}>
              <li>Semana</li>
              <li>Mês</li>
              <li>Semestre</li>
              <li>Ano</li>
            </ul>
          </DropdownListWrapper>
        )}
      </div>
    </DropdownWrapper>
  );
};

export default DropdownFilter;
