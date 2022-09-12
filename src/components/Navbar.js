import React , {useContext} from 'react';
//Icons
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
//Lib
import {TooltipComponent} from "@syncfusion/ej2-react-popups";
//Data
import userProfileImg from "../data/avatar.jpg";
//Context
import {ContextState} from "../Context/ContextProvider";

const ToolTipCreator = ({content , Position , icon , color , dotColor , customFun}) => {
    return (
        <div>
            <TooltipComponent content={content} position={Position}>
                <button type="button" className="relative hover:bg-light-gray text-2xl p-2 rounded-full" style={{color}} onClick={customFun}>
                    {icon}
                    <span className="absolute rounded-full top-1 right-1 h-2 w-2" style={{backgroundColor : dotColor || "transparent"}}></span>
                </button>
            </TooltipComponent>
        </div>
    );
}

const Navbar = () => {

    const {dispatch} = useContext(ContextState);

    return (
        <div className="flex justify-between items-center mx-3">
            <ToolTipCreator content="Menu" Position="BottomCenter" color="#4287f5"  icon={<AiOutlineMenu/>} customFun={() => dispatch("TOGGLE-MENU")}/>
            <div className="flex items-center justify-between gap-5">
                <ToolTipCreator content="Cart" Position="BottomCenter" color="#4287f5"  icon={<FiShoppingCart/>} customFun={() => {}}/>
                <ToolTipCreator content="Chat" Position="BottomCenter" color="#4287f5" dotColor="#03C9D7"  icon={<BsChatLeft/>} customFun={() => {}}/>
                <ToolTipCreator content="Notification" Position="BottomCenter" color="#4287f5" dotColor="#fec90f"  icon={<RiNotification3Line/>} customFun={() => {}}/>
                <TooltipComponent content="User Profile" Position="BottomCenter">
                    <button type="button" className="p-1 hover:bg-light-gray rounded-xl flex justify-between items-center gap-2">
                        <img className="w-8 h-8 rounded-full" src={userProfileImg} alt="profile-img" />
                        <span className="text-gray-400 text-14">Hi ,<span className="font-bold"> Mikel</span></span>
                        <MdKeyboardArrowDown className="text-gray-400"/>
                    </button>
                </TooltipComponent>
            </div>
        </div>
    );
};

export default Navbar;
