import DefaultLayout from "../layout/DefaultLayout";
import styles from "../styles/crud.module.css";
import { IoMdCreate, IoMdTrash } from "react-icons/io";
import { useEffect, useState } from "react";

// import htmlToDraft from 'html-to-draftjs';




// #region tabs -----------------------
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// #endregion tabs -------------------




//#endregion texto enriquecido ---------------------
import dynamic from "next/dynamic";
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
const Editor = dynamic(
    () => {
        return import("react-draft-wysiwyg").then(mod => mod.Editor);
    },
    { ssr: false }
) as any;
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
//#endregion texto enriquecido ---------------------




//#region selector de fechas -----------------------
import { DateRange, Calendar } from 'react-date-range';
import { es } from 'react-date-range/dist/locale';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
//#endregion selector de fechas -------------------------------



export default function crud() {

    //region texto enriquecido
    const [editorState, setEditorState] = useState(() => { return EditorState.createEmpty() });

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
    }

    const convertContentToHTML = () => {
        console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    }
    //#endregion texto enriquecido


    //#region selector de fechas
    const [date, setDate] = useState(null);

    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);
    //#endregion selector de fechas


    return (
        <DefaultLayout>
            <div>
                <div>
                    <h1>CRUD</h1>
                    <h3 className="fs-6">EL subtitulo va aquí</h3>
                </div>
                <div className={`${styles['card-fz']} card shadow rounded-fz`}>
                    <form className="card-body ">
                        <div className="row">
                            {/* input 1 */}
                            <div className="mb-3 col-md-6 col-12">
                                <label htmlFor="exampleInputEmail1" className="form-label">Input 1</label>
                                <input type="email" className=" appearance-none relative block w-full px-3 py-3 ring-1 ring-gray-300 dark:ring-gray-600 ring-opacity-80 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 text-sm leading-none" placeholder="Escriba..." id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            {/* input 2 */}
                            <div className="mb-3 col-md-6 col-12">
                                <label htmlFor="exampleInputPassword1" className="form-label">Input 2</label>
                                <input type="text" className="appearance-none relative block w-full px-3 py-3 ring-1 ring-gray-300 dark:ring-gray-600 ring-opacity-80 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 text-sm leading-none" placeholder="Escriba..." id="exampleInputPassword1" />
                            </div>
                            {/* Input 3 */}
                            <div className="mb-3 col-md-6 col-12">
                                <label htmlFor="exampleDataList" className="form-label">Input de autocompletado</label>
                                <input className="appearance-none relative block w-full px-3 py-3 ring-1 ring-gray-300 dark:ring-gray-600 ring-opacity-80 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 text-sm leading-none" placeholder="Escriba..." list="datalistOptions" id="exampleDataList" />
                                <datalist id="datalistOptions">
                                    <option value="San Francisco" />
                                    <option value="New York" />
                                    <option value="Seattle" />
                                    <option value="Los Angeles" />
                                    <option value="Chicago" />
                                </datalist>
                            </div>

                            {/* input 4 */}
                            <div className="mb-3 col-md-6 col-12">
                                <label htmlFor="exampleInputEmail1" className="form-label">Input 1</label>
                                <input type="email" className=" appearance-none relative block w-full px-3 py-3 ring-1 ring-gray-300 dark:ring-gray-600 ring-opacity-80 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 text-sm leading-none" placeholder="Escriba..." id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>

                            {/* input 5 */}
                            <div className="mb-3 col-md-6 col-12">
                                <label htmlFor="exampleInputEmail1" className="form-label">Input 1</label>
                                <input type="email" className=" appearance-none relative block w-full px-3 py-3 ring-1 ring-gray-300 dark:ring-gray-600 ring-opacity-80 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 text-sm leading-none" placeholder="Escriba..." id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>

                        </div>
                        <hr />
                        <h3>Tabla</h3>
                        <div className="card-body mb-3 rounded-fz shadow table-responsive">
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
                                        <td className="d-flex"><button type="button" className="btn btn-sm">
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
                                        <td className="d-flex"><button type="button" className="btn btn-sm">
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
                                        <td className="d-flex"><button type="button" className="btn btn-sm">
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
                                <li className="page-item"><a className="page-link" href="#">Anterior</a></li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">Siguiente</a></li>
                            </ul>
                        </nav>

                        <button type="button" className="btn btn-primary btn-custom">Guardar</button>
                        <button type="button" className="btn btn-danger ms-2">Cancelar</button>
                    </form>
                </div>
            </div>

            {/* sección editor enriquecido */}
            <div className="rounded-fz card-body shadow-sm bg-white my-3">
                <h2>Texto enriquecido</h2>
                <div id="editor-1">
                    <Editor
                        editorClassName="editor-class"
                        defaultEditorState={editorState}
                        editorState={editorState}
                        onEditorStateChange={onEditorStateChange}
                    />
                    <button onClick={convertContentToHTML} className="btn btn-primary my-2">Print data log</button>
                </div>
            </div>



            <div className="rounded-fz card-body shadow-sm bg-white my-3">
                <h2>Selector de fechas</h2>
                <div className="row">
                    <div className="col-md-6 col-12">
                        <DateRange
                            editableDateInputs={true}
                            onChange={item => setState([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={state}
                            locale={es}
                        />
                    </div>

                    <div className="col-md-6 col-12">
                        <Calendar onChange={item => setDate(item)}
                            locale={es} date={date} />
                    </div>

                </div>
            </div>






            {/* sección tag */}
            <div className="rounded-fz card-body shadow-sm bg-white">
                <h2>Tabs</h2>
                <div>
                    <Tabs>
                        <TabList>
                            <Tab>Datos de persona de contacto</Tab>
                            <Tab>Datos de persona de facturación</Tab>
                            <Tab>Datos de persona de auditoria</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="mt-4">
                                <form className="row">
                                    <div className="col-md-6 col-12">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Nombre de la persona de contacto</label>
                                        <input type="email" className="input-default" />
                                    </div>

                                    <div className="col-md-6 col-12">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Cargo de la persona de contacto</label>
                                        <input type="email" className="input-default" />
                                    </div>

                                    <div className="col-md-6 col-12">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Teléfono de la persona de contacto</label>
                                        <input type="email" className="input-default" />
                                    </div>

                                    <div className="col-md-6 col-12">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email de la persona de contacto</label>
                                        <input type="email" className="input-default" />
                                    </div>

                                    <div className="col-12 my-2">
                                        <button className="btn btn-custom btn-primary">Guardar</button>
                                        <button className="btn btn-custom btn-secondary ml-1">Finalizar</button>
                                    </div>
                                </form>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="mt-4">
                                <form className="row">
                                    <div className="col-md-6 col-12">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Nombre de la persona de facturación</label>
                                        <input type="email" className="input-default" />
                                    </div>

                                    <div className="col-md-6 col-12">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Cargo de la persona de facturación</label>
                                        <input type="email" className="input-default" />
                                    </div>

                                    <div className="col-md-6 col-12">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Teléfono de la persona de facturación</label>
                                        <input type="email" className="input-default" />
                                    </div>

                                    <div className="col-md-6 col-12">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email de la persona de facturación</label>
                                        <input type="email" className="input-default" />
                                    </div>

                                    <div className="col-12 my-2">
                                        <button className="btn btn-custom btn-primary">Guardar</button>
                                        <button className="btn btn-custom btn-secondary ml-1">Finalizar</button>
                                    </div>
                                </form>
                            </div>
                        </TabPanel>

                        <TabPanel>
                            <div className="mt-4">
                                <form className="row">
                                    <div className="col-md-6 col-12">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Nombre de la persona de auditoria</label>
                                        <input type="email" className="input-default" />
                                    </div>

                                    <div className="col-md-6 col-12">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Cargo de la persona de auditoria</label>
                                        <input type="email" className="input-default" />
                                    </div>

                                    <div className="col-md-6 col-12">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Teléfono de la persona de auditoria</label>
                                        <input type="email" className="input-default" />
                                    </div>

                                    <div className="col-md-6 col-12">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email de la persona de auditoria</label>
                                        <input type="email" className="input-default" />
                                    </div>

                                    <div className="col-12 my-2">
                                        <button className="btn btn-custom btn-primary">Guardar</button>
                                        <button className="btn btn-custom btn-secondary ml-1">Finalizar</button>
                                    </div>
                                </form>
                            </div>
                        </TabPanel>
                    </Tabs>

                </div>
            </div>
        </DefaultLayout>
    )
}