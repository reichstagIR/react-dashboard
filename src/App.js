import React , {useContext} from 'react';
//Components
import {Navbar , SideBar , Settings} from "./components";
//Lib
import {Routes , Route} from "react-router-dom";
//Context
import {ContextState} from "./Context/ContextProvider";
//Styles
import "./App.css";


const App = () => {

    const {state} = useContext(ContextState);
    console.log(state.isMenuActive)
    return (
        <div className="flex min-h-screen dark:bg-main-dark-bg">
            <div className={`sidebar h-screen overflow-y-auto dark:bg-secondary-dark-bg bg-white ${state.isMenuActive ? "w-80 md:static fixed" : "w-0"} flex-shrink-0`}>
                <SideBar />
            </div>
            <div className="w-full dark:bg-main-dark-bg bg-main-bg p-5">
                <Navbar />
            </div>
            <Settings/>
        </div>
    );
};

export default App;
