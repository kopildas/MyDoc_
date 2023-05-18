import React, { useReducer, useContext } from "react";
import { DISPLAY_ALERT,SUCCESS_ALERT,CLEAR_ALERT } from "./actions";
import reducer from "./reducers";

const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
}


const AppContex = React.createContext()

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer,initialState)
//PageTransitionEvent
    const displayAlert = () =>{
        dispatch({type:DISPLAY_ALERT})
        clearALERT()
    }
    const successAlert = () =>{
        dispatch({type:SUCCESS_ALERT})
        clearALERT()
    }
    const clearALERT = () =>{
        setTimeout(()=>{
            dispatch({type:CLEAR_ALERT})
        },3000)
    }


    return (
        <AppContex.Provider value={{...state,displayAlert,successAlert}}>
            {children}
        </AppContex.Provider>
    )
}

const useAppContex = () => {
    return useContext(AppContex)
}

export { AppProvider, initialState ,useAppContex};
