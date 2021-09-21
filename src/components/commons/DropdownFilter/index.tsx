import React, { useState, useEffect } from "react";
import { DropdownWrapper, Button, DropdownListWrapper } from "./styles";
import { DownIcon } from "../svg/index";

interface IPropsDropdownFilter {
  label: string;
  data: {
    id: number;
    temp: string;
  }[];
}

const DropdownFilter: React.FC<IPropsDropdownFilter> = ({ label, data }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const clickOutside = () => setIsOpen(!isOpen);
    if (isOpen) {
      window.addEventListener("click", clickOutside);
    }
    return () => {
      window.removeEventListener("click", clickOutside);
    };
  }, [isOpen]);

  return (
    <DropdownWrapper>
      <p>{label}</p>
      <div>
        <Button onClick={() => setIsOpen(!isOpen)}>
          {/* o placeholder do dropdown é o primeiro elemento de data */}
          <span>{data[0].temp}</span>
          <DownIcon />
        </Button>
        {isOpen && (
          <DropdownListWrapper>
            <ul>
              {data?.map((item) => (
                <li key={item.id}>{item.temp}</li>
              ))}
            </ul>
          </DropdownListWrapper>
        )}
      </div>
    </DropdownWrapper>
  );
};

export default DropdownFilter;
