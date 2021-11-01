import * as React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, chakra } from "@chakra-ui/react";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { useTable, useSortBy, Column, usePagination } from "react-table";

export type DataTableProps<Data extends object> = {
  data: Data[];
  columns: Column<Data>[];
};

export default function SkillTable<Data extends object>({
  data,
  columns,
}: DataTableProps<Data>) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy, usePagination);

  return (
    <>
      <Table {...getTableProps()} size="sm">
        <Thead>
          {headerGroups.map((headerGroup: any) => (
            <Tr
              key={headerGroup.headers}
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column: any) => (
                <Th
                  key={column.accessor}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  isNumeric={column.isNumeric}
                >
                  {column.render("Header")}
                  <chakra.span pl="4">
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <TriangleDownIcon aria-label="sorted descending" />
                      ) : (
                        <TriangleUpIcon aria-label="sorted ascending" />
                      )
                    ) : null}
                  </chakra.span>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row: any) => {
            prepareRow(row);
            return (
              <Tr key={row.name} {...row.getRowProps()}>
                {row.cells.map((cell: any) => (
                  <Td
                    key={cell.column.accessor}
                    {...cell.getCellProps()}
                    isNumeric={cell.column.isNumeric}
                  >
                    {cell.render("Cell")}
                  </Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </>
  );
}
