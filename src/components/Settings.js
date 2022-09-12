import React from 'react';
//Lib
import {TooltipComponent} from "@syncfusion/ej2-react-popups";
//Icons
import { FiSettings } from "react-icons/fi";

const Settings = () => {
    return (
        <div className="fixed right-4 bottom-4">
            <TooltipComponent content="Setting" position="Top">
                <button type="button" className="text-3xl p-3 hover:shadow-xl rounded-full bg-blue-800 text-white">
                    <FiSettings />
                </button>
            </TooltipComponent>
        </div>
    );
};

export default Settings;
