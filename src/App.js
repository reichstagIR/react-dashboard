import React , {useContext} from 'react';
// Components
import {Navbar , SideBar , Settings} from "./components";
import {Ecommerce , Orders , Employees , Customers , Calendar , Kanban , Editor , ColorPicker , Line} from "./pages";
//Lib
import {Routes, Route, Navigate} from "react-router-dom";
//Context
import {ContextState} from "./Context/ContextProvider";
//Styles
import "./App.css";


const App = () => {

    const {state} = useContext(ContextState);

    return (
        <div className={state.siteTheme === "Dark" ? "dark" : ""}>
            <div className="flex min-h-screen dark:bg-main-dark-bg">
                <div className={`sidebar h-screen overflow-y-auto dark:bg-secondary-dark-bg bg-white z-40 ${state.isMenuActive ? "w-72 lg:sticky top-0 fixed" : "w-0"} flex-shrink-0`}>
                    <SideBar />
                </div>
                <div className={`${state.isMenuActive ? "lg:w-[calc(100%-18rem)]" : "lg:w-full"} w-full dark:bg-main-dark-bg bg-main-bg p-4`}>
                    <Navbar />
                    <Routes>
                        {/*Pages*/}
                        <Route path="/" element={<Ecommerce />}/>
                        <Route path="/orders" element={<Orders />}/>
                        <Route path="/employees" element={<Employees />}/>
                        <Route path="/customers" element={<Customers />}/>
                        <Route path="/calendar" element={<Calendar />}/>
                        <Route path="/kanban" element={<Kanban />}/>
                        <Route path="/editor" element={<Editor />}/>
                        <Route path="/color-picker" element={<ColorPicker />}/>
                        <Route path="/line" element={<Line />}/>
                        {/*Navigator*/}
                        <Route path="/ecommerce" element={<Navigate to="/" />}/>
                    </Routes>
                </div>
                <Settings/>
            </div>
        </div>
    );
};

export default App;
