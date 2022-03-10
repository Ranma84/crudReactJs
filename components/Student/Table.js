import { Card, Loading, Ripple } from "../../ui";
import { usePagination, useTable } from "react-table";

import React from 'react';
import { fetcher } from "../../lib";
import useSWR from "swr";
import { useEffect, useState } from "react";


const url="https://vh0dtjwik1.execute-api.us-east-1.amazonaws.com/Produccion/liststudents/"

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  return (
    <>
      <div className="inline-flex items-center mb-4">
      Mostrar
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
          className="appearance-none relative inline-block w-full px-3 py-3 border border-transparent shadow-sm placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 text-sm leading-none mx-3"
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>{" "}
        entradas
      </div>
      <Card>
        <table
          className="border-collapse table-auto w-full whitespace-nowrap relative divide-y divide-gray-200"
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr
                className="ltr:text-left rtl:text-right"
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map((column) => (
                  <th
                    className="border-b border-gray-100 dark:border-gray-700 px-6 py-2 font-medium tracking-wider uppercase text-xs"
                    {...column.getHeaderProps()}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        className="border-t border-gray-100 dark:border-gray-700"
                        {...cell.getCellProps()}
                      >
                        <span className="px-6 py-4 flex items-center">
                          {cell.render("Cell")}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
      <div className="flex flex-col md:flex-row items-center">
        <span>
        Página{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span className="flex-1"></span>
        <span className="py-3 md:py-0">
        Ir a la página:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            className="appearance-none relative inline-block px-3 py-3 border border-transparent placeholder-gray-500 text-gray-900 shadow-sm rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 text-sm leading-none w-12"
          />
        </span>
        <div className="ml-0 mr-0 sm:ltr:ml-3 sm:rtl:mr-3">
          <button
            className="relative inline-flex justify-center ltr:rounded-l-lg rtl:rounded-r-lg border border-transparent px-4 py-3 bg-white text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline transition ease-in-out duration-150 text-sm leading-none"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            Primero
            <Ripple color="black" />
          </button>
          <button
            className="relative inline-flex justify-center border-t border-b border-transparent px-4 py-3 bg-white text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline transition ease-in-out duration-150 text-sm leading-none"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            Previo
            <Ripple color="black" />
          </button>
          <button
            className="relative inline-flex justify-center border-t border-b border-transparent px-4 py-3 bg-white text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline transition ease-in-out duration-150 text-sm leading-none"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Siguiente
            <Ripple color="black" />
          </button>
          <button
            className="relative inline-flex justify-center ltr:rounded-r-lg rtl:rounded-l-lg border border-transparent px-4 py-3 bg-white text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline transition ease-in-out duration-150 text-sm leading-none"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            Anterior
            <Ripple color="black" />
          </button>
        </div>
      </div>
    </>
  );
}

function App() {
    const columns = React.useMemo(
        () => [
          {
            Header: "STUDENT",
            columns: [
              {
                Header: "ID",
                accessor: "id",
                Cell: e =><a href={'student/'+e.value}> {e.value} </a>
              },
              {
                Header: "Name",
                accessor: "first_name",
              },
              {
                Header: "Last Name",
                accessor: "picture",
              },
            ],
          },
        ],
      );

const [data, setdata] = useState([]);


const  inicio= async () => {
    const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    };
    fetch(url, requestOptions)
    .then(response => response.json())
    .then(datos => {setdata(JSON.parse(datos.data));});
}

useEffect(() => {
  inicio();
}, []);


  if (!data)
    return (
      <div className="flex items-center justify-center h-full">
        <Loading />
      </div>
    );

  return <Table columns={columns} data={data} />;
}

export default App;