import Table from "../components/Table";
import DefaultLayout from "../layout/DefaultLayout";
import { IoMdCreate, IoMdTrash, IoMdSend } from "react-icons/io";
import styles from "../styles/table.module.css";
// const TablePage = () => <Table />;

// TablePage.getInitialProps = async () => ({
//   namespacesRequired: ["header", "footer", "sidebar"],
// });

// export default TablePage;

export default function Tablas() {
  return (
    <div>
      <DefaultLayout>
        {/* Buscador */}
        <div>
          <h2>Titulo</h2>
          <p>Subtitulo va aqui</p>
        </div>
        <div>
          <div className="position-relative sticky-top center mb-3">
            <input placeholder="Buscador" type="search" className="w-100 ps-3 p-2 shadow  rounded-fz" />
            <button className={`${styles['btn-search']} b-primary rounded-circle center `}><IoMdSend  size={25} /></button>
          </div>
        </div>
        {/* <Table /> */}

        <div className="card-body mb-3 rounded-fz shadow table-responsive bg-white">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td className="d-flex">
                  <button type="button" className="btn btn-sm">
                    <IoMdCreate size={20} />
                  </button>
                  <button type="button" className="btn btn-sm text-danger ml-1">
                    <IoMdTrash size={20} />
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td className="d-flex">
                  <button type="button" className="btn btn-sm">
                    <IoMdCreate size={20} />
                  </button>
                  <button type="button" className="btn btn-sm text-danger ml-1">
                    <IoMdTrash size={20} />
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
                <td className="d-flex">
                  <button type="button" className="btn btn-sm">
                    <IoMdCreate size={20} />
                  </button>
                  <button type="button" className="btn btn-sm text-danger ml-1">
                    <IoMdTrash size={20} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#">
                Anterior
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Siguiente
              </a>
            </li>
          </ul>
        </nav>
      </DefaultLayout>
    </div>
  );
}
