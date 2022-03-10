
import DefaultLayout from "../layout/DefaultLayout";
import { IoMdCreate, IoMdPaperPlane } from "react-icons/io";
import { useEffect, useState } from "react";

import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import CreateOrEditInvoice from "../components/CreateOrEditInvoice";

const dataTestCompanies = [
    {
        id: 0,
        name: 'Cobol'
    },
    {
        id: 1,
        name: 'JavaScript'
    },
    {
        id: 2,
        name: 'Basic'
    },
    {
        id: 3,
        name: 'PHP'
    },
    {
        id: 4,
        name: 'Java'
    }
]

export default function ControlFinanciero() {

    const [companies, setCompanies] = useState(dataTestCompanies);
    const [selectedCompany, setSelectedCompany]: [{ id: number, name: string }, any] = useState(null);
    const [stateAndUrlModalSection, setStateAndUrlModalSection] = useState({
        state: 'create',
        url: '#modalSection',
        isLoading: false,
        data: null
    });
    const handleOnSearch = (string, results) => {
        console.log(string, results)
    }

    const handleOnHover = (result) => {
        console.log(result)
    }

    const handleOnSelect = (item) => {
        console.log(item)
        setSelectedCompany(item)
    }

    const handleOnFocus = () => {
        console.log('Focused')
    }

    const formatResult = (item) => {
        return (
            <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
        )
    }


    const dataRows = [
        {
            id: 0,
            provider: 'Compañia 1',
            razonSocial: 'Banco de Chile',
            contact: 'Juan Perez',
            phone: '123456789',
            email: 'fsssds@gmail.com',
            invoice: "123456789",
            comprobante: "123456789",
            activation: "123456789",
        },
        {
            id: 0,
            provider: 'Compañia 1',
            razonSocial: 'Banco de Chile',
            contact: 'Juan Perez',
            phone: '123456789',
            email: 'fsssds@gmail.com',
            invoice: "123456789",
            comprobante: "123456789",
            activation: "123456789",
        },
        {
            id: 0,
            provider: 'Compañia 1',
            razonSocial: 'Banco de Chile',
            contact: 'Juan Perez',
            phone: '123456789',
            email: 'fsssds@gmail.com',
            invoice: "123456789",
            comprobante: "123456789",
            activation: "123456789",
        },
        {
            id: 0,
            provider: 'Compañia 1',
            razonSocial: 'Banco de Chile',
            contact: 'Juan Perez',
            phone: '123456789',
            email: 'fsssds@gmail.com',
            invoice: "123456789",
            comprobante: "123456789",
            activation: "123456789",
        },
        {
            id: 0,
            provider: 'Compañia 1',
            razonSocial: 'Banco de Chile',
            contact: 'Juan Perez',
            phone: '123456789',
            email: 'fsssds@gmail.com',
            invoice: "123456789",
            comprobante: "123456789",
            activation: "123456789",
        },
        {
            id: 0,
            provider: 'Compañia 1',
            razonSocial: 'Banco de Chile',
            contact: 'Juan Perez',
            phone: '123456789',
            email: 'fsssds@gmail.com',
            invoice: "123456789",
            comprobante: "123456789",
            activation: "123456789",
        },

    ]

    const addInvoice = (id) => {

    }
    return (
        <DefaultLayout>
            <div>
                <h2>Control Financiero</h2>
                <div className="rounded-fz card-body shadow-sm bg-white my-3">
                    <div className="col-md-3">
                        <label htmlFor="select-company" className="form-label">Empresa cliente:</label>
                        <select className="input-default" id="select-company" aria-label="Default select example">
                            <option value="1">Banco de Machala</option>
                            <option value="2">Banco de Machala</option>
                            <option value="3">Banco de Machala</option>
                        </select>
                    </div>
                    <div className="my-3">
                        <ReactSearchAutocomplete
                            items={companies}
                            onSearch={handleOnSearch}
                            onHover={handleOnHover}
                            onSelect={handleOnSelect}
                            onFocus={handleOnFocus}
                            autoFocus
                            formatResult={formatResult}
                        />
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Proveedor</th>
                                <th scope="col">Razón Social</th>
                                <th scope="col">Contacto Fact</th>
                                <th scope="col">Teléfono</th>
                                <th scope="col">Email</th>
                                <th scope="col">Factura</th>
                                <th scope="col">Comprobante</th>
                                <th scope="col">Activación</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataRows.map((item, index) => <tr >
                                <td scope="row">{item.id}</td>
                                <td>{item.provider}</td>
                                <td>{item.razonSocial}</td>
                                <td>{item.contact}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td className="text-center">
                                    <span><label htmlFor={`file-invoice-${index}`}><IoMdPaperPlane /></label> <input id={`file-invoice-${index}`} type="file" className="d-none" /></span>
                                </td>
                                <td className="text-center">                                    
                                    <span><label htmlFor={`file-comprobante-${index}`}><IoMdPaperPlane /></label> <input id={`file-comprobante-${index}`} type="file" className="d-none" /></span>
                                </td>
                                <td>{item.activation}</td>
                                <td><div className="d-flex">
                                    <button type="button" onClick={() => addInvoice(item.id)} data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-sm">
                                        <IoMdCreate size={20} />
                                    </button>
                                    {/* <button type="button" className="btn btn-sm text-danger ml-1">
                                        <IoMdTrash onClick={() => deleteRequirement(requirement.id)} size={20} />
                                    </button> */}
                                </div>
                                </td>
                            </tr>)}

                        </tbody>
                    </table>
                </div>
                <CreateOrEditInvoice url={stateAndUrlModalSection.url} state={stateAndUrlModalSection.state} isLoading={stateAndUrlModalSection.isLoading} data={stateAndUrlModalSection.data} />
            </div>
        </DefaultLayout>
    )
}