import { createContext, useReducer, useEffect } from 'react'
export const ClassContext = createContext([])

export const classReducer = (state, action) => {
    switch (action.type) {
        case 'ALL':
        case 'CREATED':
        case 'JOINED':
        case 'CREATE':
            return { classes: action.payload };
        default:
            return state;
    }
};

export const ClassContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(classReducer, {
        classes: null
    })
    useEffect(() => {
        fetchData('all');
        fetchData('created');
        fetchData('joined');
    }, []);
    const fetchData = async (type) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_SERVER}/api/class/${type.toLowerCase()}`);
            const data = await response.json();
            dispatch({
                type: type.toUpperCase(),
                payload: data.classes.reverse()
            });
        } catch (error) {
            // 
        }
    };

    return (
        <ClassContext.Provider value={{ ...state, dispatch, fetchData }}>
            {children}
        </ClassContext.Provider>
    )
}