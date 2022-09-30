import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    username: undefined,
	fullName: undefined,
	phone: undefined,
	email: undefined,
	password: undefined,
};

export const RegisterContext = createContext(INITIAL_STATE)

const RegisterReducer = (state, action) =>{
    switch(action.type) {
        case "REGISTER_START":
            return action.payload;
        // case "LOGIN_SUCCESS":
        //     return {
        //         user: action.payload,
        //         // loading: false,
        //         // error: null,
        //     };
        // case "LOGIN_FAIL":
        //     return {
        //         user: action.payload,
        //         loading: false,
        //         error: null,
        //     };
        case "RESET_REGISTER":
            return INITIAL_STATE
            default:
                return state;
    }
};

export const RegisterContextProvider = ({children}) => {
const [state, dispatch] = useReducer(RegisterReducer, INITIAL_STATE);

return(
<RegisterContext.Provider 
value={{username:state.username, fullName:state.fullName, phone:state.phone, email:state.email, password:state.password, dispatch}}>
    {children}
</RegisterContext.Provider>

)

}