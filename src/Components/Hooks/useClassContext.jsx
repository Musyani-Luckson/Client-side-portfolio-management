import { ClassContext } from "../Contexts/ClassContext";
import { useContext, useEffect } from "react";
export const useClassContext = () => {
    const context = useContext(ClassContext);
    if (!context) {
        throw Error(`Error`);
    }
    const { classes } = context;
    return context
};
