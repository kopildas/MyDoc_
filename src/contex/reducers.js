import { DISPLAY_ALERT,SUCCESS_ALERT } from "./actions"




const reducer = (state,action)=> {
    if(action.type === DISPLAY_ALERT) {
        return {
            ...state,
            showAlert: true,
            alertType: 'danger',
            alertText: 'Please provide all values!',
        }
    }
    if(action.type === SUCCESS_ALERT) {
        return {
            ...state,
            showAlert: true,
            alertType: 'success',
            alertText: 'you successfully signed in',
        }
    }
    throw new Error(`no such action: ${action.type}`)
}

export default reducer