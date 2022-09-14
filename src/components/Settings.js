import React , {useState , useContext} from 'react';
//Lib
import {TooltipComponent} from "@syncfusion/ej2-react-popups";
//Icons
import { FiSettings } from "react-icons/fi";
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
//Data
import {themeColors} from "../data/dummy";
//Context
import {ContextState} from "../Context/ContextProvider";


const Settings = () => {

    const [isSettingActive, setIsSettingActive] = useState(false);
    const {state , dispatch} = useContext(ContextState);

    const closeHandler = () => {
    setIsSettingActive(false);
    };

    const changeColorThemeHandler = (selectedColor) => {
         dispatch({type : "SET-THEME-COLOR", color : selectedColor});
         closeHandler();
    }

    const checkedHandler = (event) => {
        dispatch({type : "SET-THEME" , color : event.target.value});
        closeHandler();
    }

    return (
        <>
            <div className="fixed right-4 bottom-4 z-40">
                <TooltipComponent content="Setting" position="Top">
                    <button type="button" className="text-3xl p-3 hover:shadow-xl rounded-full text-white" style={{backgroundColor : state.colorTheme}} onClick={() => setIsSettingActive(true)}>
                        <FiSettings />
                    </button>
                </TooltipComponent>
            </div>

            {isSettingActive && (
                <>
                    <div className="absolute inset-0 bg-black opacity-50 z-40" />
                    <div className="fixed top-0 right-0 bottom-0 w-96 bg-white dark:bg-secondary-dark-bg z-50 opacity-100 nav-item p-7 divide-y">
                        <div className="flex items-center justify-between mb-3">
                            <p className="text-xl font-semibold text-black dark:text-white">Settings</p>
                            <button type="button" className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray rounded-full text-[#99abb4]" onClick={closeHandler}>
                                <MdOutlineCancel />
                            </button>
                        </div>
                        <div>
                            <p className="text-xl font-semibold mt-3 text-black dark:text-white">Theme Option</p>
                            <div className="my-2 p-3">
                                <div>
                                    <label htmlFor="light-theme" className="mr-2 text-black dark:text-white">Light</label>
                                    <input type="radio" name="theme" value="Light" id="light-theme" onChange={checkedHandler} checked={state.siteTheme === "Light"}/>
                                </div>
                                <div className="mt-2">
                                    <label htmlFor="dark-theme" className="mr-2 text-black dark:text-white">Dark</label>
                                    <input type="radio" name="theme" value="Dark" id="dark-theme" onChange={checkedHandler} checked={state.siteTheme === "Dark"}/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-xl font-semibold mt-3 text-black dark:text-white">Theme Colors</p>
                            <div className="mt-3 flex justify-between items-center">
                                {themeColors.map(item => (
                                    <button type="button" className="w-12 h-12 flex items-center justify-center text-xl rounded-full text-white" style={{backgroundColor : item.color}} onClick={() => changeColorThemeHandler(item.color)}>
                                        <BsCheck className={item.color === state.colorTheme ? "block" : "hidden"}/>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Settings;
