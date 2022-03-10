import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter } from 'react-pro-sidebar';
import Header from '../layout/Header';
import 'react-pro-sidebar/dist/css/styles.css';
import Link from 'next/link';

import { IoMdKeypad, IoMdListBox, IoMdPeople, IoMdArrowForward, IoMdList } from 'react-icons/io';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/client';

interface ISidebarTitle {
    is: "header";
    icon: any;
    title: string;
}
interface ISidebarMenu {
    is: "menu";
    menu: (ISidebarItem | ISidebarSubmenu)[];
}

interface ISidebarItem {
    is: "item";
    icon: any;
    title: string;
    to: string;
}

interface ISidebarSubmenu {
    is: "submenu";
    icon: any;
    title: string;
    menu: (ISidebarItem)[];
}

const itemDashboard: (ISidebarTitle | ISidebarMenu)[] = [
    {
        is: "header",
        icon: <IoMdListBox />,
        title: '',
    },
    {
        is: "menu",
        menu: [
            {
                is: "submenu",
                icon: <IoMdKeypad />,
                title: 'R1',
                menu: [
                    {
                        is: "item",
                        icon: <IoMdArrowForward />,
                        title: 'Registro de Proveedores',
                        to: '/supplier/new',
                    },
                    {
                        is: "item",
                        icon: <IoMdArrowForward />,
                        title: 'Cobro/Activación del Proveedor',
                        to: '/control-financiero',
                    },
                    {
                        is: "item",
                        icon: <IoMdArrowForward />,
                        title: 'Solicitar Recalificación',
                        to: '/',
                    }
                ]
            },
            {
                is: "submenu",
                icon: <IoMdKeypad />,
                title: 'R2',
                menu: [
                    {
                        is: "item",
                        icon: <IoMdArrowForward />,
                        title: 'Informe de Auditorías no Programadas (R2)',
                        to: '/',
                    },
                    {
                        is: "item",
                        icon: <IoMdArrowForward />,
                        title: 'Informe de Control de Auditorías',
                        to: '/',
                    }
                ]
            },
            {
                is: "submenu",
                icon: <IoMdKeypad />,
                title: 'R3',
                menu: [
                    {
                        is: "item",
                        icon: <IoMdArrowForward />,
                        title: 'Informe de Auditorías Programadas (R3)',
                        to: '/',
                    },
                    {
                        is: "item",
                        icon: <IoMdArrowForward />,
                        title: 'Informe de Auditorías Cerradas',
                        to: '/',
                    }
                ]
            },
            {
                is: "submenu",
                icon: <IoMdKeypad />,
                title: 'Calificación',
                menu: [
                    {
                        is: "item",
                        icon: <IoMdArrowForward />,
                        title: 'Etapa de Empresas',
                        to: '/',
                    },
                    {
                        is: "item",
                        icon: <IoMdArrowForward />,
                        title: 'Empresas Calificadas',
                        to: '/',
                    }
                ]
            },
            {
                is: "submenu",
                icon: <IoMdKeypad />,
                title: 'Configuración',
                menu: [
                    {
                        is: "item",
                        icon: <IoMdArrowForward />,
                        title: 'Usuarios',
                        to: '/usuario',
                    },
                    {
                        is: "item",
                        icon: <IoMdArrowForward />,
                        title: 'Matriculación Empresa',
                        to: '/client/new',
                    },
                    {
                        is: "item",
                        icon: <IoMdArrowForward />,
                        title: 'Lista de Verificación/ Sección/ Requisito',
                        to: '/auditable-requirements',
                    },
                    {
                        is: "item",
                        icon: <IoMdArrowForward />,
                        title: 'Asignación de Auditores',
                        to: '/',
                    },
                    {
                        is: "item",
                        icon: <IoMdArrowForward />,
                        title: 'Mantenimiento de Auditorías',
                        to: '/',
                    },
                    {
                        is: "item",
                        icon: <IoMdArrowForward />,
                        title: 'Empresas Clientes',
                        to: '/client',
                    }
                ]
            }
        ],
    },
];

function DefaultLayout({ children }) {
    const router = useRouter();
    const [toggled, setToggled] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const [showSidebar, setShowSidebar] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [menuSidebar, setMenuSidebar] = useState([]);
    const handleToggleSidebar = (value) => {
        console.log(value);
        setToggled(value);
    };
    const handleShowSidebarChange = () => {
        console.log(showSidebar);
        setShowSidebar(!showSidebar);
    };
    const [menus, setMenus] = useState([]);
    const obtenerDatos = async () => {
        const session = await getSession();
        let rol = session.user.image;
        const url = process.env.URL + "/menu";
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ rol: rol })
        };
        console.log("Primero");
        console.log(requestOptions);
        console.log("Despues");
         fetch(url, requestOptions)
             .then(response => response.json())
             .then(data => {setMenus(data.menus)});
            const sidebar = transformDataForSidebar(menus);   
        // comentar
    }

    function transformDataForSidebar (data): (ISidebarTitle | ISidebarMenu)[] {
        let menu = [];
        menu = data.map((element) => {
            const item: (ISidebarTitle | ISidebarMenu) = {
                is: "header",
                icon: <IoMdListBox />,
                title: element?.nombre || 'Test',
            }
            return item
            // aquí transformar  los datos del responde a un objeto de tipo ISidebar
        });
        return menu;

    }

    useEffect(() => {
        window.addEventListener("resize", handleIsMobileChange);
        const _isMobile = window.innerWidth < 768;
        setIsMobile(_isMobile);
        setShowSidebar(!_isMobile);
     //   obtenerDatos();
    }, []);

    function handleIsMobileChange() {
        console.log(window.innerWidth);
        if (window.innerWidth < 720) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    const lateral: ISidebarItem[] = menus.map(function (obj) {
        let rObj = {};
        rObj["is"] = obj.tipo;
        rObj["icon"] = obj.icono;
        rObj["title"] = obj.nombre_menu;
        rObj["to"] = obj.url;
        return rObj as ISidebarItem;
    });


    const generateSidebar = () => {
        return menuSidebar.map((item, index) => {
            const element = item;
            if (element.is == "header") {
                return <SidebarHeader key={index} className="fw-bold fs-5 text-center pt-2 px-3">
                    {element.title}
                </SidebarHeader>

            } else if (element.is == "menu") {
                const menu = element.menu;
                return (
                    <Menu>
                        {
                            menu.map((item, index1) => {
                                const menu = item;
                                if (menu.is == "item") {
                                    return (<MenuItem key={index + '-' + index1} className={router.pathname == item.to ? "selected" : ""} icon={menu.icon}>
                                        <Link href={menu.to}>{menu.title}</Link>
                                    </MenuItem>)
                                } else if (menu.is == "submenu") {
                                    return (<SubMenu key={index + '-' + index1} icon={menu.icon} title={menu.title} >
                                        {
                                            menu.menu.map((item1, index2) => {
                                                return (<MenuItem key={index + '-1' + index2} className={router.pathname == item1.to ? "selected" : ""} icon={item1.icon}>
                                                    <Link href={item1.to}>{item1.title}</Link>
                                                </MenuItem>)
                                            })
                                        }
                                    </SubMenu>)
                                }

                            })
                        }
                    </Menu>
                );
            }
        });
    }


    return (
        <div>
            <Header onClick={handleShowSidebarChange} ></Header>
            <div className={`app ${!showSidebar || isMobile ? 'wide-main-content' : ''}`}>
                {(isMobile && showSidebar) && <div className="background-sidebar z-10" onClick={handleShowSidebarChange}></div>}
                <div className={`sidebar-container z-10 d-lg-flex ${showSidebar ? '' : 'hide-sidebar'}`}>
                    <ProSidebar collapsed={collapsed} width={200} onToggle={handleToggleSidebar} toggled={toggled}>
                        {generateSidebar()}
                    </ProSidebar>
                </div>
                <main className="w-100 container-fluid py-3 px-md-5 px-3">{children}</main>
            </div>
        </div>
    )
}

export default DefaultLayout;