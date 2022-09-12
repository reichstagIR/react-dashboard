import React , {useContext , useEffect , useState} from 'react';
//Icons
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
//Lib
import {Link , NavLink} from "react-router-dom";
//Data
import {links} from "../data/dummy";
import {TooltipComponent} from "@syncfusion/ej2-react-popups";
//Context
import {ContextState} from "../Context/ContextProvider";

const SideBar = () => {

    const {dispatch} = useContext(ContextState);

    useEffect(() => {
        const windowSize = window.innerWidth;
        if(windowSize <= 700){
            dispatch("TOGGLE-MENU");
        }
    } , []);


    const activeLink = 'flex items-center gap-3 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
    const normalLink = 'flex items-center gap-3 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

    return (
        <div className="m-3 pb-10">
            <Link to="/" className="flex justify-between items-center text-2xl font-bold mt-4 ml-3 tracking-tight dark:text-white text-slate-900">
                <div className="flex justify-between items-center gap-2">
                    <SiShopware />
                    <span>Dashboard</span>
                </div>
                <TooltipComponent content="Menu" Postion="BottomCenter">
                    <button className="text-xl rounded-full p-3 hover:bg-light-gray md:hidden" style={{color : "#4287f5"}} onClick={() => dispatch("TOGGLE-MENU")}>
                        <MdOutlineCancel />
                    </button>
                </TooltipComponent>
            </Link>
            <div className="mt-10">
                {links.map(link => (
                    <div key={link.title}>
                        <p className="text-gray-400 dark:text-gray-400 uppercase mb-3">{link.title}</p>
                        {link.links.map(items => (
                            <NavLink key={items.name} to={`/${items.name}`} className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                                {items.icon}
                                <span>{items.name}</span>
                            </NavLink>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SideBar;
