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

    const {state , dispatch} = useContext(ContextState);

    return (
        <div className="flex justify-between items-center mx-3">
            <ToolTipCreator content="Menu" Position="BottomCenter" color={state.colorTheme}  icon={<AiOutlineMenu/>} customFun={() => dispatch({type : "TOGGLE-MENU"})}/>
            <div className="flex items-center justify-between gap-5">
                <ToolTipCreator content="Cart" Position="BottomCenter" color={state.colorTheme}  icon={<FiShoppingCart/>} customFun={() => {}}/>
                <ToolTipCreator content="Chat" Position="BottomCenter" color={state.colorTheme} dotColor="#03C9D7"  icon={<BsChatLeft/>} customFun={() => {}}/>
                <ToolTipCreator content="Notification" Position="BottomCenter" color={state.colorTheme} dotColor="#fec90f"  icon={<RiNotification3Line/>} customFun={() => {}}/>
                <TooltipComponent content="User Profile" Position="BottomCenter">
                    <button type="button" className="p-1 hover:bg-light-gray rounded-xl flex justify-between items-center gap-2">
                        <img className="w-8 h-8 rounded-full" src={userProfileImg} alt="profile-img" />
                        <span className={`text-14`} style={{color : state.colorTheme}}>Hi ,<span className="font-bold" style={{color : state.colorTheme}}> Mikel</span></span>
                        <MdKeyboardArrowDown style={{color : state.colorTheme}}/>
                    </button>
                </TooltipComponent>
            </div>
        </div>
    );
};

export default Navbar;
