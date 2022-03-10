// import { Avatar, Badge, Dropdown, DropdownMenu, DropdownToggle } from "/ui";
// import {
// Bell,
// Cog,
// Duplicate,
// LightningBolt,
// Logout,
// MenuAlt1,
// Pencil,
// Selector,
// Translate,
// User,
// ViewGrid
// } from "/icons/solid";
// import { Check, Search } from "/icons/outline";
// // import { i18n, useTranslation } from "i18n";

// import Notifications from "./Notifications";
// import PropTypes from "prop-types";
// import Shortcuts from "./Shortcuts";
// import { useAppState } from "components/AppProvider";

// const colors = [
//   "gray",
//   "red",
//   "yellow",
//   "green",
//   "blue",
//   "indigo",
//   "purple",
//   "pink",
// ];
// const Header = ({ toggleOpen }) => {
//   const [state, dispatch] = useAppState();
//   const { t } = useTranslation("header");

//   const handleChange = (e) => {
//     dispatch({
//       type: e.target.id,
//     });
//   };

//   return (
//     <>
//       <nav
//         classNameNameName={`bg-white dark:bg-gray-600 shadow-sm z-20 md:z-30 h-header ${
//           state.stickyHeader ? "sticky top-0" : "relative"
//         }`}
//       >
//         <div classNameNameName="w-full mx-auto h-full">
//           <div classNameNameName="relative flex items-center justify-between h-full">
//             <a
//               classNameNameName="flex md:hidden items-center flex-shrink-0 px-4 cursor-pointer text-gray-900"
//               onClick={toggleOpen}
//             >
//               <MenuAlt1 width={18} height={18} strokeWidth={2} />
//             </a>
//             <div classNameNameName="flex-1 flex items-center justify-start px-4">
//               <div classNameNameName="hidden sm:block">
//                 <div classNameNameName="flex">
//                   <div classNameNameName="relative">
//                     <label>
//                       <input
//                         classNameNameName="appearance-none relative block w-full ltr:pl-0 sm:ltr:pl-8 rtl:pr-0 sm:rtl:pr-8 ltr:pr-3 rtl:pl-3 border-0 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 leading-none h-5 bg-transparent"
//                         placeholder={t("search")}
//                       />
//                       <span classNameNameName="absolute top-0 ltr:left-0 rtl:right-0 inline-block hidden sm:block">
//                         <Search width={18} height={18} />
//                       </span>
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div classNameNameName="inset-y-0 right-0 items-center px-4 sm:static sm:inset-auto flex h-full">
//               <Dropdown classNameNameName="px-3 m-0 static sm:relative flex flex-row items-center h-full">
//                 <DropdownToggle>
//                   <ViewGrid width={18} height={18} strokeWidth={2} />
//                 </DropdownToggle>
//                 <DropdownMenu classNameNameName="shortcuts-dropdown px-0 dark:text-gray-800 overflow-hidden right-0 left-0">
//                   <Shortcuts title={t("Shortcuts")} />
//                 </DropdownMenu>
//               </Dropdown>
//               <Dropdown classNameNameName="px-3 static sm:relative h-full flex items-center">
//                 <DropdownToggle classNameNameName="h-full">
//                   <Pencil width={18} height={18} />
//                 </DropdownToggle>
//                 <DropdownMenu
//                   style={{ minWidth: "350px" }}
//                   classNameNameName="w-full sm:w-auto right-0 left-0"
//                 >
//                   <div classNameNameName="w-full">
//                     <div classNameNameName="w-full flex flex-row items-center justify-between py-2 px-2 ring-1 ring-black ring-opacity-5">
//                       <div classNameNameName="list-none flex flex-row overflow-auto w-0 min-w-full -mb-10 pb-10">
//                         <div
//                           classNameNameName={`text-center py-3 px-3 cursor-pointer flex flex-1`}
//                         >
//                           <a classNameNameName="text-gray-900 hover:text-indigo">
//                             Settings
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                     <div classNameNameName="mt-px rounded-b-lg relative grid gap-6 bg-body px-5 py-6 sm:gap-5 sm:p-5">
//                       {Object.keys(state)
//                         .filter((option) => {
//                           if (
//                             option !== "sidebarColor" &&
//                             option !== "language" &&
//                             option !== "name"
//                           )
//                             return option;
//                         })
//                         .map(
//                           (option, index) =>
//                             option !== "mobile" && (
//                               <a
//                                 key={index}
//                                 href="#"
//                                 classNameNameName={`flex justify-between px-3 py-3 leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out -m-3 ${
//                                   option === "rtl" ? "uppercase" : ""
//                                 }`}
//                               >
//                                 {t(option)}
//                                 <label
//                                   htmlFor={`toggle${option.replace(
//                                     /^./,
//                                     function (str) {
//                                       return str.toUpperCase();
//                                     }
//                                   )}`}
//                                   classNameNameName="flex items-center cursor-pointer"
//                                 >
//                                   <div
//                                     classNameNameName={`relative ${
//                                       state.autoDarkMode &&
//                                       option === "darkMode" &&
//                                       "opacity-50"
//                                     }`}
//                                   >
//                                     <input
//                                       id={`toggle${option.replace(/^./, function (
//                                         str
//                                       ) {
//                                         return str.toUpperCase();
//                                       })}`}
//                                       type="checkbox"
//                                       classNameNameName="hidden"
//                                       checked={state[option]}
//                                       onChange={(e) => handleChange(e)}
//                                       disabled={
//                                         state.autoDarkMode &&
//                                         option === "darkMode"
//                                       }
//                                     />
//                                     <div classNameNameName="toggle__bar h-4 bg-gray-400 rounded-full shadow-inner"></div>
//                                     <div classNameNameName="toggle__handle absolute transform bg-white rounded-full shadow-sm transform transition duration-150 ease-in-out"></div>
//                                   </div>
//                                 </label>
//                               </a>
//                             )
//                         )}

//                       <div classNameNameName="flex justify-between px-3 py-3 leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition-all duration-150 ease-in-out -m-3">
//                         <label classNameNameName="flex items-center cursor-pointer">
//                           {t("sidebarColor")}
//                         </label>
//                       </div>
//                       <div classNameNameName="flex flex-wrap px-3 -m-3">
//                         {colors.map((color, index) => (
//                           <span
//                             classNameNameName={`w-5 h-5 mx-1 rounded-full cursor-pointer bg-${color}-800 mb-1 relative`}
//                             key={index}
//                             onClick={() =>
//                               dispatch({
//                                 type: "setSidebarColor",
//                                 value: color,
//                               })
//                             }
//                           >
//                             <span
//                               classNameNameName={`absolute transform ltr:translate-x-1/2 rtl:-translate-x-1/2 translate-y-1/2 w-2 h-2 block rounded-full cursor-pointer ${
//                                 color === state.sidebarColor
//                                   ? "bg-white"
//                                   : `bg-${color}-800`
//                               }`}
//                               style={{
//                                 marginLeft: !state.rtl ? "2px" : "0",
//                                 marginRight: state.rtl ? "2px" : "0",
//                                 marginTop: "2px",
//                               }}
//                             ></span>
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </DropdownMenu>
//               </Dropdown>

//               <Dropdown classNameNameName="px-3 m-0 static sm:relative flex flex-row items-center h-full">
//                 <DropdownToggle>
//                   <Bell width={18} height={18} strokeWidth={2} />
//                   <Badge
//                     color="red"
//                     classNameNameName="absolute top-0 ltr:right-0 rtl:left-0 ring-2 ring-white dark:ring-gray-600 h-4"
//                     style={{
//                       transform: "translate(5px, -5px)",
//                     }}
//                   >
//                     6
//                   </Badge>
//                 </DropdownToggle>
//                 <DropdownMenu classNameNameName="notification-dropdown px-0 dark:text-gray-800 overflow-hidden right-0 left-0">
//                   <Notifications title={t("notifications")} />
//                 </DropdownMenu>
//               </Dropdown>

//               <Dropdown classNameNameName="px-3 relative h-full flex items-center">
//                 <DropdownToggle>
//                   <Avatar size={28} src={`images/avatar.jpg`} alt={`avatar`} />
//                 </DropdownToggle>
//                 <DropdownMenu>
//                   <div classNameNameName="py-1">
//                     <a
//                       href="#"
//                       classNameNameName="flex items-center px-5 py-3 leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
//                     >
//                       <LightningBolt width={16} height={16} />{" "}
//                       <span classNameNameName="ltr:ml-3 rtl:mr-3">{t("activity")}</span>
//                     </a>
//                     <a
//                       href="#"
//                       classNameNameName="flex items-center px-5 py-3 leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
//                     >
//                       <User width={16} height={16} />{" "}
//                       <span classNameNameName="ltr:ml-3 rtl:mr-3">
//                         {t("yourProfile")}
//                       </span>
//                     </a>
//                     <a
//                       href="#"
//                       classNameNameName="flex items-center px-5 py-3 leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
//                     >
//                       <Cog width={16} height={16} />{" "}
//                       <span classNameNameName="ltr:ml-3 rtl:mr-3">{t("settings")}</span>
//                     </a>
//                     <a
//                       href="#"
//                       classNameNameName="flex items-center px-5 py-3 leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out border-t border-1 border-gray-100"
//                     >
//                       <Logout width={16} height={16} />{" "}
//                       <span classNameNameName="ltr:ml-3 rtl:mr-3">{t("signOut")}</span>
//                     </a>
//                   </div>
//                 </DropdownMenu>
//               </Dropdown>

//               <Dropdown classNameNameName="px-3 relative h-full flex items-center">
//                 <DropdownToggle>
//                   <Translate width={18} height={18} />
//                 </DropdownToggle>
//                 <DropdownMenu classNameNameName="ltr:mr-1 rtl:ml-1">
//                   <div classNameNameName="py-1">
//                     <a
//                       classNameNameName="flex items-center px-5 py-3 leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out cursor-pointer"
//                       onClick={() => {
//                         i18n.changeLanguage("es");
//                         dispatch({
//                           type: "setLanguage",
//                           value: "es",
//                         });
//                         dispatch({
//                           type: "toggleRtl",
//                           value: false,
//                         });
//                       }}
//                     >
//                       <Check
//                         width={16}
//                         height={16}
//                         classNameNameName={`${
//                           i18n.language === "es" || state.language === "es"
//                             ? "opacity-100"
//                             : "opacity-0"
//                         }`}
//                       />{" "}
//                       <span classNameNameName="ltr:ml-3 rtl:mr-3">{t("english")}</span>
//                     </a>
//                     <a
//                       classNameNameName="flex items-center px-5 py-3 leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out cursor-pointer"
//                       onClick={() => {
//                         i18n.changeLanguage("ar");
//                         dispatch({
//                           type: "setLanguage",
//                           value: "ar",
//                         });
//                         dispatch({
//                           type: "toggleRtl",
//                           value: true,
//                         });
//                       }}
//                     >
//                       <Check
//                         width={16}
//                         height={16}
//                         classNameNameName={`${
//                           i18n.language === "ar" || state.language === "ar"
//                             ? "opacity-100"
//                             : "opacity-0"
//                         }`}
//                       />{" "}
//                       <span classNameNameName="ltr:ml-3 rtl:mr-3">{t("arabic")}</span>
//                     </a>
//                     <a
//                       classNameNameName="flex items-center px-5 py-3 leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out cursor-pointer"
//                       onClick={() => {
//                         i18n.changeLanguage("hi");
//                         dispatch({
//                           type: "setLanguage",
//                           value: "hi",
//                         });
//                         dispatch({
//                           type: "toggleRtl",
//                           value: false,
//                         });
//                       }}
//                     >
//                       <Check
//                         width={16}
//                         height={16}
//                         classNameNameName={`${
//                           i18n.language === "hi" || state.language === "hi"
//                             ? "opacity-100"
//                             : "opacity-0"
//                         }`}
//                       />{" "}
//                       <span classNameNameName="ltr:ml-3 rtl:mr-3">{t("hindi")}</span>
//                     </a>
//                     <a
//                       classNameNameName="flex items-center px-5 py-3 leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out cursor-pointer"
//                       onClick={() => {
//                         i18n.changeLanguage("fr");
//                         dispatch({
//                           type: "setLanguage",
//                           value: "fr",
//                         });
//                         dispatch({
//                           type: "toggleRtl",
//                           value: false,
//                         });
//                       }}
//                     >
//                       <Check
//                         width={16}
//                         height={16}
//                         classNameNameName={`${
//                           i18n.language === "fr" || state.language === "fr"
//                             ? "opacity-100"
//                             : "opacity-0"
//                         }`}
//                       />{" "}
//                       <span classNameNameName="ltr:ml-3 rtl:mr-3">{t("french")}</span>
//                     </a>
//                     <a
//                       classNameNameName="flex items-center px-5 py-3 leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out cursor-pointer"
//                       onClick={() => {
//                         i18n.changeLanguage("zh");
//                         dispatch({
//                           type: "setLanguage",
//                           value: "zh",
//                         });
//                         dispatch({
//                           type: "toggleRtl",
//                           value: false,
//                         });
//                       }}
//                     >
//                       <Check
//                         width={16}
//                         height={16}
//                         classNameNameName={`${
//                           i18n.language === "zh" || state.language === "zh"
//                             ? "opacity-100"
//                             : "opacity-0"
//                         }`}
//                       />{" "}
//                       <span classNameNameName="ltr:ml-3 rtl:mr-3">{t("chinese")}</span>
//                     </a>
//                   </div>
//                 </DropdownMenu>
//               </Dropdown>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// Header.propTypes = {
//   toggleOpen: PropTypes.func,
// };

// export default Header;

import Image from 'next/image';
import Link from 'next/link';
import { User } from '../icons/solid';
import { IoMdContact, IoMdLogOut, IoMdPerson, IoIosNotifications, IoMdMenu } from 'react-icons/io';
import { useEffect, useState } from 'react';

import { useSession, signOut } from 'next-auth/client';
import { useRouter } from 'next/router';

interface INotifications {
  title: string;
  description: string;
  date: string;
  button?: {
    text: string;
    link: string;
    classColor?: string;
    icon?: any
  };

}

const DATA_TEST: INotifications[] = [
  {
    title: 'New message from John Doe',
    description: 'Hey, I am a new message from John Doe',
    date: '2 days ago',
    button: {
      text: 'Ver',
      link: '/',
      classColor: 'bg-indigo-500 text-white',
      icon: <IoMdContact />
    }
  },
  {
    title: 'New message from John Doe',
    description: 'Hey, I am a new message from John Doe',
    date: '2 days ago',
  },
  {
    title: 'New message from John Doe',
    description: 'Hey, I am a new message from John Doe',
    date: '2 days ago',
  },
  {
    title: 'New message from John Doe',
    description: 'Hey, I am a new message from John Doe Hey, I am a new message from John Doe Hey, I am a new message from John Doe',
    date: '2 days ago',
  },
  {
    title: 'New message from John Doe',
    description: 'Hey, I am a new message from John Doe',
    date: '2 days ago',
  },
  {
    title: 'New message from John Doe',
    description: 'Hey, I am a new message from John Doe',
    date: '2 days ago',
  },
]

export default function Header(props) {
  const { onClick } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [newMessageCount, setNewMessageCount] = useState(2);
  const [notifications, setNotifications]: any[] = useState(DATA_TEST);
  const router = useRouter();

  function handleIsOpenChange(value) {
    setIsOpen(value);
  };

  function handleNotificationChange(_notifications: INotifications[]) {
    setNotifications(_notifications);
  }

  function addNotification(_notification: INotifications[]) {
    let _notifications = [...notifications];
    _notifications.unshift(_notification);
    setNotifications(_notifications);
  }

  async function logoutHandler() {
    const xx = await signOut();
    router.push('/');
  }

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid">
        <div className="center">
          <button className="c-secondary p-0" onClick={onClick}>
            <IoMdMenu size={25} />
          </button>
        </div>
        <div className='center order-0 order-lg-1'>
          <div className="center">
            <div className=" dropdown position-relative mx-md-4 mx-3  item-navbar">
              <div className="center" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
                <IoIosNotifications className="c-tertiary mr-2" size={25} />
                {
                  newMessageCount > 0 &&
                (<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {newMessageCount}
                  <span className="visually-hidden">unread messages</span>
                </span>)
                }
              </div>
              <ul className="dropdown-menu  header-dropdown shadow header-dropdown-notifications" aria-labelledby="navbarDropdown1">
                {notifications.map((notification: INotifications, index) => (
                  <li key={index} >
                    <a className="dropdown-item  justify-content-start border-bottom text-truncate" href="#">
                      <span className="text-teal-600 ">{notification.title}</span><br />
                      <span className="text-muted">{notification.description}</span><br />
                      <small className="text-primary fst-italic">{notification.date}</small>
                      {notification.button && (
                        <div className="ml-auto">
                          <Link href={notification.button.link}>
                            <a className={`${notification?.button?.classColor} px-2 p-0 btn btn-sm btn-primary btn-custom btn-sm rounded-pill`}>
                              <span className="center">{notification.button.icon} {notification.button.text}</span>
                            </a>
                          </Link>
                        </div>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className=" dropdown">
              <div className=" text-dark center" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <IoMdContact className="c-tertiary" size={25} />
              </div>
              <ul className="dropdown-menu dropdown-menu-end header-dropdown shadow" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item  center justify-content-start" href="#"> <IoMdPerson size={20} /> Perfil</a></li>
                <li><a className="dropdown-item  center justify-content-start" href="#"> <IoIosNotifications size={20} /> Notificaciones</a></li>
                {/*<li><a className="dropdown-item  center justify-content-start" href="#"> <IoMdLogOut size={20} /> Cerrar sesión</a></li> */}
                <button className="dropdown-item  center justify-content-start" onClick={logoutHandler} > <IoMdLogOut size={20} /> Cerrar sesión </button>        
              </ul>
            </div>
          </div>
          <Link href="#">
            <a className="navbar-brand h-100 center   p-0 m-0">
              <Image
                src="/assets/img/califi-logo.svg"
                alt="Picture of the author"
                width={130}
                height='40'
              />
            </a>
          </Link>
          {/* hasta aqui */}
          <button className="navbar-toggler border-0 p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button></div>

        <div className="collapse navbar-collapse px-2 bg-light rounded-bottom" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link aria-current="page" href="#"><a className="nav-link active">Inicio</a></Link>
            </li>
            <li className="nav-item">
            {/*  <a className="nav-link">Novedades</a> */}
            </li>
          </ul>
        </div>
      </div>
    </nav >
  )
};