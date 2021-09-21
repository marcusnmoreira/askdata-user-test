interface IData {
  id: number;
  temp: string;
}

const dataComparar: IData[] = [
  { id: 1, temp: "Semana" },
  { id: 2, temp: "Mês" },
  { id: 3, temp: "Semestre" },
  { id: 4, temp: "Ano" },
];

const dataAgrupar: IData[] = [
  { id: 1, temp: "Projeto" },
  { id: 2, temp: "Departamento" },
  { id: 3, temp: "Time" },
  { id: 4, temp: "Unidade" },
];

export { dataComparar, dataAgrupar };
