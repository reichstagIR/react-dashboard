import React , {createContext , useReducer} from 'react';

//Lib
import { writeStorage, useLocalStorage } from "@rehooks/local-storage";

export const ContextState = createContext();

const ContextProvider = ({children}) => {

    const [siteTheme] = useLocalStorage("siteTheme" , "Light");
    const [colorTheme] = useLocalStorage("colorTheme" , "#1A97F5");


    const initialState = {
        isMenuActive : true,
        siteTheme,
        colorTheme,
    }


    const reducer = (state , action) => {
        switch (action.type) {
            case "TOGGLE-MENU":
                return {
                    ...state,
                    isMenuActive: !state.isMenuActive,
                };
            case "SET-THEME-COLOR":
                writeStorage("colorTheme" , action.color);
                return {
                    ...state,
                    colorTheme : action.color,
                };
            case "SET-THEME":
                writeStorage("siteTheme" , action.color);
                return {
                    ...state,
                    siteTheme : action.color,
                };
            default :
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <ContextState.Provider value={{state , dispatch}}>
            {children}
        </ContextState.Provider>
    );
};

export default ContextProvider;
