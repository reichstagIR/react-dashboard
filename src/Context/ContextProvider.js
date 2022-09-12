import React , {createContext , useReducer} from 'react';

export const ContextState = createContext([]);


const initialState = {
    isMenuActive : true,
}

const reducer = (state , action) => {
    switch (action) {
        case "TOGGLE-MENU":
            return {
                ...state,
                isMenuActive: !state.isMenuActive,
            };
        default :
            return state;
    }
}

const ContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ContextState.Provider value={{state , dispatch}}>
            {children}
        </ContextState.Provider>
    );
};

export default ContextProvider;
