import React from "react";
import { Box,Btn } from "../UI";
import { lista } from "../../info";
import ExportCard from "../Card";
const List = () => {
  return (
    <Box>
      {lista.cargos.map(( cargo, i) => {
        return (
          <ExportCard key={i} cargo={cargo}>
          </ExportCard>
        );
      })}
     <Btn>Ver mas</Btn>
    </Box>
  );
};

export default List;
