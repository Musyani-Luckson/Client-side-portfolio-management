import { createContext, useReducer, useEffect, useState } from 'react'
export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch (action.type) {
        case `LOGIN`:
            return { user: action.payload }
        case `LOGOUT`:
            return { user: null }
        default:
            return state
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: {/*here*/} // here change {} to null........here...
    })

    const checkLoggedIn = async () => {

        const response = await fetch(`${import.meta.env.VITE_SERVER}/api/user/loggedIn`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw Error(`Not logged in`);
        }
        const data = await response.json();
        dispatch({
            type: `LOGIN`,
            payload: {} //data.user
        })
    };

    useEffect(() => {
        checkLoggedIn();
    }, []);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}