import DefaultLayout from "../layout/DefaultLayout";
import styles from "../styles/crud.module.css";
import { IoMdCreate, IoMdTrash, IoMdCheckmark } from "react-icons/io";
import { Fragment, useState } from "react";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import CreateOrEditRequirement from "../components/CreateOrEditRequirement";
import CreateOrEditSection from "../components/Client/CreateOrEditSection";
declare const Swal: any;

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

export default function auditableRequirements() {

    const [companies, setCompanies] = useState(dataTestCompanies);
    const [selectedCompany, setSelectedCompany]: [{ id: number, name: string }, any] = useState(null);
    const [stateAndUrlModalRequirement, setStateAndUrlModalRequirement] = useState({
        state: 'create',
        url: '#modalRequirement',
        isLoading: false,
        data: null
    });
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

    const deleteRequirement = (id) => {
        console.log(id)
        Swal.fire({
            title: '¿Estás seguro?',
            showDenyButton: true,
            // showCancelButton: true,
            confirmButtonText: 'Eliminar',
            denyButtonText: `No, cancelar`,
        }).then((result) => {
            // Aqui  hacer la peticion http
            if (result.isConfirmed) {
                Swal.fire('Requerimiento eliminado correctamente ' + id, '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Eliminación cancelada', '', 'info')
            }
        })
    }

    const editRequirement = (id) => {
        console.log(id)
        setStateAndUrlModalRequirement({
            state: 'edit',
            url: '#modalRequirement',
            isLoading: true,
            data: null
        })
      
    }

    const requirementsAll = [
        {
            name: "R2. REQUISITOS COMPLIANCE P. JURÍDICA",
            items: [
                {
                    id: 1, description: "Data test."
                    , requirements: [
                        { id: 1, description: "POLÍTICAS COVID-19" },
                        { id: 2, description: "TEST COVID-19" },
                        { id: 3, description: "AISLAMIENTO Y CUARENTENA" },
                        { id: 4, description: "MANEJO DE PERSONAS VULNERABLES" },
                        { id: 5, description: "CONTROL DE TEMPERATURA EN ACCESO" },
                        { id: 6, description: "CAPACITACIÓN DE SÍNTOMAS" },
                        { id: 7, description: "SEÑALÉTICA " },
                        { id: 8, description: "PRODUCTOS DE HIGIENE DISPONIBLE" },
                        { id: 9, description: "EQUIPO DE PROTECCIÓN PREVENTIVO" },
                        { id: 10, description: "CONTROL DE DISTANCIAMIENTO" },

                    ]
                },
                {
                    id: 1, description: "Data test."
                    , requirements: [
                        { id: 1, description: "POLÍTICAS COVID-19" },
                        { id: 2, description: "TEST COVID-19" },
                        { id: 3, description: "AISLAMIENTO Y CUARENTENA" },
                        { id: 4, description: "MANEJO DE PERSONAS VULNERABLES" },
                        { id: 5, description: "CONTROL DE TEMPERATURA EN ACCESO" },
                        { id: 6, description: "CAPACITACIÓN DE SÍNTOMAS" },
                        { id: 7, description: "SEÑALÉTICA " },
                        { id: 8, description: "PRODUCTOS DE HIGIENE DISPONIBLE" },
                        { id: 9, description: "EQUIPO DE PROTECCIÓN PREVENTIVO" },
                        { id: 10, description: "CONTROL DE DISTANCIAMIENTO" },

                    ]
                },
                {
                    id: 1, description: "Data test."
                    , requirements: [
                        { id: 1, description: "POLÍTICAS COVID-19" },
                        { id: 2, description: "TEST COVID-19" },
                        { id: 3, description: "AISLAMIENTO Y CUARENTENA" },
                        { id: 4, description: "MANEJO DE PERSONAS VULNERABLES" },
                        { id: 5, description: "CONTROL DE TEMPERATURA EN ACCESO" },
                        { id: 6, description: "CAPACITACIÓN DE SÍNTOMAS" },
                        { id: 7, description: "SEÑALÉTICA " },
                        { id: 8, description: "PRODUCTOS DE HIGIENE DISPONIBLE" },
                        { id: 9, description: "EQUIPO DE PROTECCIÓN PREVENTIVO" },
                        { id: 10, description: "CONTROL DE DISTANCIAMIENTO" },

                    ]
                },
                {
                    id: 1, description: "Data test."
                    , requirements: [
                        { id: 1, description: "POLÍTICAS COVID-19" },
                        { id: 2, description: "TEST COVID-19" },
                        { id: 3, description: "AISLAMIENTO Y CUARENTENA" },
                        { id: 4, description: "MANEJO DE PERSONAS VULNERABLES" },
                        { id: 5, description: "CONTROL DE TEMPERATURA EN ACCESO" },
                        { id: 6, description: "CAPACITACIÓN DE SÍNTOMAS" },
                        { id: 7, description: "SEÑALÉTICA " },
                        { id: 8, description: "PRODUCTOS DE HIGIENE DISPONIBLE" },
                        { id: 9, description: "EQUIPO DE PROTECCIÓN PREVENTIVO" },
                        { id: 10, description: "CONTROL DE DISTANCIAMIENTO" },

                    ]
                },
                {
                    id: 1, description: "Data test."
                    , requirements: [
                        { id: 1, description: "POLÍTICAS COVID-19" },
                        { id: 2, description: "TEST COVID-19" },
                        { id: 3, description: "AISLAMIENTO Y CUARENTENA" },
                        { id: 4, description: "MANEJO DE PERSONAS VULNERABLES" },
                        { id: 5, description: "CONTROL DE TEMPERATURA EN ACCESO" },
                        { id: 6, description: "CAPACITACIÓN DE SÍNTOMAS" },
                        { id: 7, description: "SEÑALÉTICA " },
                        { id: 8, description: "PRODUCTOS DE HIGIENE DISPONIBLE" },
                        { id: 9, description: "EQUIPO DE PROTECCIÓN PREVENTIVO" },
                        { id: 10, description: "CONTROL DE DISTANCIAMIENTO" },
                    ]
                },
            ],         
        },
        {
            name: "R2. REQUISITOS COMPLIANCE P. JURÍDICA",
            items: [
                {
                    id: 1, description: "Data test."
                    , requirements: [
                        { id: 1, description: "POLÍTICAS COVID-19" },
                        { id: 2, description: "TEST COVID-19" },
                        { id: 3, description: "AISLAMIENTO Y CUARENTENA" },
                        { id: 4, description: "MANEJO DE PERSONAS VULNERABLES" },
                        { id: 5, description: "CONTROL DE TEMPERATURA EN ACCESO" },
                        { id: 6, description: "CAPACITACIÓN DE SÍNTOMAS" },
                        { id: 7, description: "SEÑALÉTICA " },
                        { id: 8, description: "PRODUCTOS DE HIGIENE DISPONIBLE" },
                        { id: 9, description: "EQUIPO DE PROTECCIÓN PREVENTIVO" },
                        { id: 10, description: "CONTROL DE DISTANCIAMIENTO" },

                    ]
                },
                {
                    id: 1, description: "Data test."
                    , requirements: [
                        { id: 1, description: "POLÍTICAS COVID-19" },
                        { id: 2, description: "TEST COVID-19" },
                        { id: 3, description: "AISLAMIENTO Y CUARENTENA" },
                        { id: 4, description: "MANEJO DE PERSONAS VULNERABLES" },
                        { id: 5, description: "CONTROL DE TEMPERATURA EN ACCESO" },
                        { id: 6, description: "CAPACITACIÓN DE SÍNTOMAS" },
                        { id: 7, description: "SEÑALÉTICA " },
                        { id: 8, description: "PRODUCTOS DE HIGIENE DISPONIBLE" },
                        { id: 9, description: "EQUIPO DE PROTECCIÓN PREVENTIVO" },
                        { id: 10, description: "CONTROL DE DISTANCIAMIENTO" },

                    ]
                },
                {
                    id: 1, description: "Data test."
                    , requirements: [
                        { id: 1, description: "POLÍTICAS COVID-19" },
                        { id: 2, description: "TEST COVID-19" },
                        { id: 3, description: "AISLAMIENTO Y CUARENTENA" },
                        { id: 4, description: "MANEJO DE PERSONAS VULNERABLES" },
                        { id: 5, description: "CONTROL DE TEMPERATURA EN ACCESO" },
                        { id: 6, description: "CAPACITACIÓN DE SÍNTOMAS" },
                        { id: 7, description: "SEÑALÉTICA " },
                        { id: 8, description: "PRODUCTOS DE HIGIENE DISPONIBLE" },
                        { id: 9, description: "EQUIPO DE PROTECCIÓN PREVENTIVO" },
                        { id: 10, description: "CONTROL DE DISTANCIAMIENTO" },

                    ]
                },
                {
                    id: 1, description: "Data test."
                    , requirements: [
                        { id: 1, description: "POLÍTICAS COVID-19" },
                        { id: 2, description: "TEST COVID-19" },
                        { id: 3, description: "AISLAMIENTO Y CUARENTENA" },
                        { id: 4, description: "MANEJO DE PERSONAS VULNERABLES" },
                        { id: 5, description: "CONTROL DE TEMPERATURA EN ACCESO" },
                        { id: 6, description: "CAPACITACIÓN DE SÍNTOMAS" },
                        { id: 7, description: "SEÑALÉTICA " },
                        { id: 8, description: "PRODUCTOS DE HIGIENE DISPONIBLE" },
                        { id: 9, description: "EQUIPO DE PROTECCIÓN PREVENTIVO" },
                        { id: 10, description: "CONTROL DE DISTANCIAMIENTO" },

                    ]
                },
                {
                    id: 1, description: "Data test."
                    , requirements: [
                        { id: 1, description: "POLÍTICAS COVID-19" },
                        { id: 2, description: "TEST COVID-19" },
                        { id: 3, description: "AISLAMIENTO Y CUARENTENA" },
                        { id: 4, description: "MANEJO DE PERSONAS VULNERABLES" },
                        { id: 5, description: "CONTROL DE TEMPERATURA EN ACCESO" },
                        { id: 6, description: "CAPACITACIÓN DE SÍNTOMAS" },
                        { id: 7, description: "SEÑALÉTICA " },
                        { id: 8, description: "PRODUCTOS DE HIGIENE DISPONIBLE" },
                        { id: 9, description: "EQUIPO DE PROTECCIÓN PREVENTIVO" },
                        { id: 10, description: "CONTROL DE DISTANCIAMIENTO" },
                    ]
                },
            ],
        },
        {
            name: "R2. REQUISITOS COMPLIANCE P. JURÍDICA",
            items: [
                {
                    id: 1, description: "Data test."
                    , requirements: [
                        { id: 1, description: "POLÍTICAS COVID-19" },
                        { id: 2, description: "TEST COVID-19" },
                        { id: 3, description: "AISLAMIENTO Y CUARENTENA" },
                        { id: 4, description: "MANEJO DE PERSONAS VULNERABLES" },
                        { id: 5, description: "CONTROL DE TEMPERATURA EN ACCESO" },
                        { id: 6, description: "CAPACITACIÓN DE SÍNTOMAS" },
                        { id: 7, description: "SEÑALÉTICA " },
                        { id: 8, description: "PRODUCTOS DE HIGIENE DISPONIBLE" },
                        { id: 9, description: "EQUIPO DE PROTECCIÓN PREVENTIVO" },
                        { id: 10, description: "CONTROL DE DISTANCIAMIENTO" },

                    ]
                },
                {
                    id: 1, description: "Data test."
                    , requirements: [
                        { id: 1, description: "POLÍTICAS COVID-19" },
                        { id: 2, description: "TEST COVID-19" },
                        { id: 3, description: "AISLAMIENTO Y CUARENTENA" },
                        { id: 4, description: "MANEJO DE PERSONAS VULNERABLES" },
                        { id: 5, description: "CONTROL DE TEMPERATURA EN ACCESO" },
                        { id: 6, description: "CAPACITACIÓN DE SÍNTOMAS" },
                        { id: 7, description: "SEÑALÉTICA " },
                        { id: 8, description: "PRODUCTOS DE HIGIENE DISPONIBLE" },
                        { id: 9, description: "EQUIPO DE PROTECCIÓN PREVENTIVO" },
                        { id: 10, description: "CONTROL DE DISTANCIAMIENTO" },

                    ]
                },
                {
                    id: 1, description: "Data test."
                    , requirements: [
                        { id: 1, description: "POLÍTICAS COVID-19" },
                        { id: 2, description: "TEST COVID-19" },
                        { id: 3, description: "AISLAMIENTO Y CUARENTENA" },
                        { id: 4, description: "MANEJO DE PERSONAS VULNERABLES" },
                        { id: 5, description: "CONTROL DE TEMPERATURA EN ACCESO" },
                        { id: 6, description: "CAPACITACIÓN DE SÍNTOMAS" },
                        { id: 7, description: "SEÑALÉTICA " },
                        { id: 8, description: "PRODUCTOS DE HIGIENE DISPONIBLE" },
                        { id: 9, description: "EQUIPO DE PROTECCIÓN PREVENTIVO" },
                        { id: 10, description: "CONTROL DE DISTANCIAMIENTO" },

                    ]
                },
                {
                    id: 1, description: "Data test."
                    , requirements: [
                        { id: 1, description: "POLÍTICAS COVID-19" },
                        { id: 2, description: "TEST COVID-19" },
                        { id: 3, description: "AISLAMIENTO Y CUARENTENA" },
                        { id: 4, description: "MANEJO DE PERSONAS VULNERABLES" },
                        { id: 5, description: "CONTROL DE TEMPERATURA EN ACCESO" },
                        { id: 6, description: "CAPACITACIÓN DE SÍNTOMAS" },
                        { id: 7, description: "SEÑALÉTICA " },
                        { id: 8, description: "PRODUCTOS DE HIGIENE DISPONIBLE" },
                        { id: 9, description: "EQUIPO DE PROTECCIÓN PREVENTIVO" },
                        { id: 10, description: "CONTROL DE DISTANCIAMIENTO" },

                    ]
                },
                {
                    id: 1, description: "Data test."
                    , requirements: [
                        { id: 1, description: "POLÍTICAS COVID-19" },
                        { id: 2, description: "TEST COVID-19" },
                        { id: 3, description: "AISLAMIENTO Y CUARENTENA" },
                        { id: 4, description: "MANEJO DE PERSONAS VULNERABLES" },
                        { id: 5, description: "CONTROL DE TEMPERATURA EN ACCESO" },
                        { id: 6, description: "CAPACITACIÓN DE SÍNTOMAS" },
                        { id: 7, description: "SEÑALÉTICA " },
                        { id: 8, description: "PRODUCTOS DE HIGIENE DISPONIBLE" },
                        { id: 9, description: "EQUIPO DE PROTECCIÓN PREVENTIVO" },
                        { id: 10, description: "CONTROL DE DISTANCIAMIENTO" },
                    ]
                },
            ],
        }
        // {
        //     name: "R2. REQUISITOS COMPLIANCE P. Natural",
        //     requirements: [
        //         { id: 1, description: "Proveedor cargará el Certificado RUC descargado de la página del SRI." },
        //         { id: 2, description: "Proveedor cargará los comprobantes de Impuestos Prediales vigentes de la oficina matriz de la empresa en caso que sea propia; de ser alquilada, cargará el Contrato de Arrendamiento registrado en la entidad competente." },
        //         { id: 3, description: "Proveedor cargará la planilla de servicio básico (Electricidad, Agua, Teléfono, Internet) a nombre de la Empresa para confirmar domicilio del proveedor." },
        //         { id: 4, description: "Proveedor cargará Certificado de Licitud de Fondos, vigente." },
        //         { id: 5, description: "Proveedor cargará Certificado de Cumplimiento Tributario vigente descargado del SRI, se verificará si cumple con sus obligaciones tributarias." },
        //         { id: 6, description: "Proveedor cargará los Formularios 101 si es Persona Jurídica o Formularios 102 si es Persona Natural, de los últimos 3 periodos, obtenidos del SRI." },
        //         { id: 7, description: "Proveedor cargará los Formularios 104 de las 3 últimas declaraciones, obtenidos del SRI." },
        //         { id: 8, description: "Proveedor cargará el Certificado de Obligaciones Patronales descargado del IESS vigente, y si cumple con sus obligaciones patronales." },
        //         { id: 9, description: "Proveedor cargará el Reglamento Interno de Trabajo Vigente y la Aprobación por parte del Ministerio de Trabajo." },
        //         { id: 10, description: "Proveedor cargará el Certificado Bancario vigente, emitido por la institución financiera competente." },
        //         { id: 11, description: "Proveedor cargará el Certificado de Deuda Actual emitido por un Buró de Crédito." },
        //         { id: 12, description: "Proveedor ingresará formato establecido donde seleccione si son bienes y/o servicios y el detalle de los 3 más importantes." },
        //         { id: 13, description: "Proveedor completará la plantilla establecida y cargará 3 Referencias Comerciales actualizadas." },
        //         { id: 14, description: "Proveedor completará la plantilla establecida de la Declaración Juramentada." },
        //         { id: 15, description: "Proveedor cargará el Codigo de ética Vigente y la Aprobado." },
        //         { id: 16, description: "Proveedor cargara información soporte del proyecto de impacto social expuesto en la auditoria." },

        //     ]
        // },
        // {
        //     name: "Requisitos R3.1 ",
        //     requirements: [
        //         { id: 1, description: "EN CASO QUE SUBCONTRATE ACTIVIDADES, COMPLETAR LA TABLA QUE SE MUESTRA A CONTINUACIÓN:" },
        //         { id: 2, description: "¿DISPONE SU EMPRESA DE UNA POLÍTICA DE RESPONSABILIDAD SOCIAL Y/O CÓDIGO DE CONDUCTA?" },
        //         { id: 3, description: "¿DISPONE DE UNA DECLARACIÓN DE RESPETO EN LA PROTECCIÓN DE LOS DERECHOS HUMANOS RECONOCIDOS EN LA DECLARACIÓN UNIVERSAL DE LOS DERECHOS HUMANOS?" },
        //         { id: 4, description: "¿LA EMPRESA GARANTIZA QUE TODOS LOS TRABAJADORES QUE TRABAJAN EN SU EMPRESA SON TRATADOS POR IGUAL SIN DISCRIMINACIÓN DE NINGÚN TIPO?" },
        //         { id: 5, description: "¿DISPONE LA EMPRESA DE ALGÚN CERTIFICADO O RECONOCIMIENTO EN MATERIA DE IGUALDAD DE HOMBRES Y MUJERES? ESPECIFICAR." },
        //         { id: 6, description: "LA EMPRESA ASEGURA QUE SE RESPETAN Y GARANTIZAN LOS DERECHOS LABORALES DE TODOS LOS TRABAJADORES Y EL CUMPLIMIENTO DE LA LEGISLACIÓN VIGENTE." },
        //         { id: 7, description: "INDIQUE SI SU EMPRESA ESTA ADHERIDA A ALGUNA INICIATIVA INTERNACIONAL EN MATERIA DE RESPONSABILIDAD SOCIAL. ESPECIFICAR CUAL." },
        //         { id: 8, description: "¿DISPONE SU EMPRESA DE UNA POLÍTICA DE COMPRAS Y /O PRÁCTICAS DE HOMOLOGACIÓN DE PROVEEDORES QUE INCLUYA ASPECTOS RELACIONADOS CON EL ÁMBITO DE LA RESPONSABILIDAD SOCIAL? ESPECIFICAR." },
        //         { id: 9, description: "¿ELABORA INFORME ANUAL DE RESPONSABILIDAD SOCIAL? ESPECIFICAR ESTÁNDAR Y DIRECCIÓN WEB." },
        //         { id: 10, description: "¿LA EMPRESA DISPONE DE UN COMITÉ DE MEJORAS, COMITÉ DE EMPRESAS O SU EQUIVALENTE?" },
        //         { id: 11, description: "¿LA EMPRESA CUMPLE CON LOS ACUERDOS NEGOCIADOS? ¿SE PUEDE EVIDENCIAR QUE LA EMPRESA RESPETA Y RESPONDE A LAS PREOCUPACIONES PLANTEADAS POR DICHO COMITÉ?" },
        //         { id: 36, description: "¿LA EMPRESA RECHAZA LA CORRUPCIÓN EN TODAS SUS FORMAS, INCLUYENDO LA EXTORSIÓN Y EL SOBORNO?" },
        //         { id: 37, description: "¿LA EMPRESA TIENE UN DEPARTAMENTO DE CUMPLIMIENTO O UNA PERSONA ESPECIFICA Y PERSONALMENTE RESPONSABLE DE LOS ASUNTOS DE CUMPLIMIENTO?" },
        //         { id: 38, description: "¿CONOCE USTED LA POLÍTICA INCORRUPCIÓN DEL CLIENTE?" },
        //         { id: 39, description: "¿CONOCE USTED LA POLÍTICA DE RESPONSABILIDAD SOCIAL EMPRESARIAL DEL CLIENTE?" },
        //     ]
        // },
        // {
        //     name: "Requisitos R3.2",
        //     requirements: [
        //         { id: 1, description: "POLÍTICAS COVID-19" },
        //         { id: 2, description: "TEST COVID-19" },
        //         { id: 3, description: "AISLAMIENTO Y CUARENTENA" },
        //         { id: 4, description: "MANEJO DE PERSONAS VULNERABLES" },
        //         { id: 5, description: "CONTROL DE TEMPERATURA EN ACCESO" },
        //         { id: 6, description: "CAPACITACIÓN DE SÍNTOMAS" },
        //         { id: 7, description: "SEÑALÉTICA " },
        //         { id: 8, description: "PRODUCTOS DE HIGIENE DISPONIBLE" },
        //         { id: 9, description: "EQUIPO DE PROTECCIÓN PREVENTIVO" },
        //         { id: 10, description: "CONTROL DE DISTANCIAMIENTO" },

        //     ]
        // }
    ]

    const renderRequirements = () => {
        return requirementsAll.map((item, index) => {
            return (
                <div className="accordion-item">
                    <h2 className="accordion-header" id={`flush-heading${index}`}>
                        <button style={{ position: 'inherit' }} className=" accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}`} aria-expanded="false" aria-controls={`flush-collapseOne${index}`}>
                            {item.name}
                        </button>
                    </h2>
                    <div id={`flush-collapse${index}`} className="accordion-collapse collapse card-body" aria-labelledby={`flush-heading${index}`} data-bs-parent="#accordionFlushExample">
                        {item.items.map((subitem, index1) => {
                            return (
                                <section className="shadow rounded-fz mt-2">
                                    <div className="accordion accordion-flush" id={`accordionFlushExample-${index}-${index1}`}>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id={`flush-heading-sub-${index1}`}>
                                                <button style={{ position: 'inherit' }} className=" accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-sub-${index1}`} aria-expanded="false" aria-controls={`flush-collapseOne-sub-${index1}`}>
                                                   <IoMdCheckmark className="mr-1" /> {subitem.description}
                                                </button>
                                            </h2>
                                            <div id={`flush-collapse-sub-${index1}`} className="accordion-collapse collapse card-body" aria-labelledby={`flush-heading-sub-${index1}`} data-bs-parent={`#accordionFlushExample-${index}-${index1}`}>
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">#</th>
                                                            <th className="text-center" scope="col">Requisitos</th>
                                                            <th scope="col">Acciones</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {subitem.requirements.map((requirement) => <tr >
                                                            <td scope="row">{requirement.id}</td>
                                                            <td>{requirement.description}</td>
                                                            <td><div className="d-flex">
                                                                <button onClick={() => editRequirement(requirement.id)} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-sm">
                                                                    <IoMdCreate size={20} />
                                                                </button>
                                                                <button type="button" className="btn btn-sm text-danger ml-1">
                                                                    <IoMdTrash onClick={() => deleteRequirement(requirement.id)} size={20} />
                                                                </button>
                                                            </div>
                                                            </td>
                                                        </tr>)}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            )
                        })}
                    </div>
                </div>
            )
        }
        )
    }

    return (
        <DefaultLayout>
            <div>
                <div>
                    <h1>Requisitos Auditables</h1>
                    <div className="mb-2">
                        <button className="btn btn-custom btn-primary mr-2" type="button" data-bs-toggle="modal" data-bs-target="#modalSection">Crear sección</button>
                        <button className="btn btn-custom btn-info" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Crear requerimiento</button>
                    </div>
                    {/* <h3 className="fs-6">EL subtitulo va aquí</h3> */}
                </div>
                <div className={`${styles['card-fz']} card shadow rounded-fz`}>
                    <div className="card-body">
                        <div className="p-3">Empresa: <span className="text-muted">{selectedCompany?.name}</span></div>
                        <div className="mb-3">
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
                        <div>
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                {renderRequirements()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CreateOrEditRequirement url={stateAndUrlModalRequirement.url} state={stateAndUrlModalRequirement.state} isLoading={stateAndUrlModalRequirement.isLoading} data={stateAndUrlModalRequirement.data} />
            <CreateOrEditSection url={stateAndUrlModalSection.url} state={stateAndUrlModalSection.state} isLoading={stateAndUrlModalSection.isLoading} data={stateAndUrlModalSection.data} />


        </DefaultLayout>
    )
}