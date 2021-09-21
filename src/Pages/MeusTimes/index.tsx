import React from "react";
import DropdownFilter from "../../components/commons/DropdownFilter";
import HeaderPages from "../../components/commons/HeaderPages";
import { PageContainer } from "../../components/commons/PageContainer";
import { FiltersTable, ListaOrganizacao, ListaTimes } from "./styles";

const MeusTimes = () => {
  return (
    <PageContainer>
      <HeaderPages pageTitle={"Meus Times"} />
      <FiltersTable>
        <h3>Resultados da organização</h3>
        <div className="filterArea">
          <DropdownFilter label={"Agrupar por"} />
          <DropdownFilter label={"Comparar com"} />
        </div>
      </FiltersTable>
      <ListaOrganizacao />
      <ListaTimes />
    </PageContainer>
  );
};

export default MeusTimes;
