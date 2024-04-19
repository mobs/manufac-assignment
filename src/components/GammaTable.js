import React from "react";
import { Table } from "@mantine/core";

const GammaTable = ({ gammaData }) => {
  const rows = gammaData.map((data) => (
    <Table.Tr
      style={{
        fontSize: "20px",
      }}
      key={data.name}
    >
      <Table.Td style={{ fontWeight: "bold" }}>{data.name}</Table.Td>
      <Table.Td>{data.class1}</Table.Td>
      <Table.Td>{data.class2}</Table.Td>
      <Table.Td>{data.class3}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table
      border={1}
      style={{
        height: "300px",
        width: "50vw",
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <Table.Thead>
        <Table.Tr
          style={{
            fontSize: "30px",
          }}
        >
          <Table.Th>Measure</Table.Th>
          <Table.Th>Class 1</Table.Th>
          <Table.Th>Class 2</Table.Th>
          <Table.Th>Class 3</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};

export default GammaTable;
