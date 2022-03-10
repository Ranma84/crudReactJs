import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { Layout } from "../components/Layout";
import MenuLateral from "../components/MenuLateral";

import SelectSearch from 'react-select-search-nextjs';

import { usePagination, useTable } from "react-table";

const url = process.env.URL;

const options = [
  {name: 'Gerente de Auditoría', value: '1'},
  {name: 'Auditor Líder', value: '2'},
  {name: 'Auditor de Campo', value: '3'},
  {name: 'Consultor', value: '4'},
  {name: 'Financiero', value: '5'},
  {name: 'Auditor de Campo', value: '3'},
];


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
    Show
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
    entries
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
      Page{" "}
      <strong>
        {pageIndex + 1} of {pageOptions.length}
      </strong>{" "}
    </span>
    <span className="flex-1"></span>
    <span className="py-3 md:py-0">
      Go to page:{" "}
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
        First
        <Ripple color="black" />
      </button>
      <button
        className="relative inline-flex justify-center border-t border-b border-transparent px-4 py-3 bg-white text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline transition ease-in-out duration-150 text-sm leading-none"
        onClick={() => previousPage()}
        disabled={!canPreviousPage}
      >
        Previous
        <Ripple color="black" />
      </button>
      <button
        className="relative inline-flex justify-center border-t border-b border-transparent px-4 py-3 bg-white text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline transition ease-in-out duration-150 text-sm leading-none"
        onClick={() => nextPage()}
        disabled={!canNextPage}
      >
        Next
        <Ripple color="black" />
      </button>
      <button
        className="relative inline-flex justify-center ltr:rounded-r-lg rtl:rounded-l-lg border border-transparent px-4 py-3 bg-white text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline transition ease-in-out duration-150 text-sm leading-none"
        onClick={() => gotoPage(pageCount - 1)}
        disabled={!canNextPage}
      >
        Last
        <Ripple color="black" />
      </button>
    </div>
  </div>
</>
)
}

export function UsuarioForm() {

  const [Usuario, setUsuario] = useState({
    user: "",
    email: "",
    telefono: "",
    password: "",
    estado: 1,
    idrol: 1,
  });

  const columns = React.useMemo(
    () => [
      {
        Header: "Cliente",
        columns: [
          {
            Header: "RUC",
            accessor: "ruc",
          },
          {
            Header: "Razon Social",
            accessor: "razonSocial",
          },
          {
            Header: "Nombre Comercial",
            accessor: "nombreComercial",
          },
        ],
      },
    ],
    []
  );

  const router = useRouter();

  useEffect(() => {
    const fetchUsuario = async (id) => {
      try {
        const { data } = await axios.get("/api/Usuarios/" + id);
        setUsuario(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (router.query?.id) {
      fetchUsuario(router.query.id);
    }
  }, []);

  const handleChange = ({ target: { name, value } }) =>
    setUsuario({ ...Usuario, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (router.query?.id) {
        console.log("updating");
        await axios.put("/api/usuarios/" + router.query.id, Usuario);
        toast.success("Task Updated", {
          position: "bottom-center",
        });
      } else {
        await axios.post("/api/usuarios", Usuario);
        toast.success("Task Saved", {
          position: "bottom-center",
        });
      }

      router.push("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="w-full max-w-xs">
      <form
        className="bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-white text-sm font-bold mb-2"
            htmlFor="user"
          >
            Usuario
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-slate-900 dark:text-white"
            type="text"
            placeholder="Usuario"
            id="user"
            name="user"
            onChange={handleChange}
            value={Usuario.user}
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="password"
            className="block text-gray-700 dark:text-white font-bold mb-2 text-sm"
          >
            Password
          </label>
          <input
            name="password"
            id="password"
            placeholder="********"
            type="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-slate-900 dark:text-white"
            onChange={handleChange}
            value={Usuario.password}
          ></input>
        </div>
        <div className="mb-4">
          <label
            htmlFor="telefono"
            className="block text-gray-700 dark:text-white font-bold mb-2 text-sm"
          >
            Teléfono:
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-slate-900 dark:text-white"
            name="telefono"
            id="telefono"
            placeholder="0999999999"
            onChange={handleChange}
            value={Usuario.telefono}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="mail"
            className="block text-gray-700 dark:text-white font-bold mb-2 text-sm"
          >
            Mail:
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-slate-900 dark:text-white"
            name="email"
            id="email"
            placeholder="admin@admin.com"
            onChange={handleChange}
            value={Usuario.email}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="mail"
            className="block text-gray-700 dark:text-white font-bold mb-2 text-sm"
          >Rol:
          </label>
          <SelectSearch options={options} value="sv" name="language" placeholder="Choose your language" />
        </div>

        <div className="col-start-2 col-span-5">
          <Table columns={columns} data={data} />
        </div>
        
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          {router.query?.id ? "Actualizar Usuario" : "Guardar Usuario"}
        </button>
      </form>
    </div>
  );
}
