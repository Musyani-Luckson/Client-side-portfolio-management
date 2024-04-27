import { AuthContext } from "../Contexts/AuthContext";
import { useContext, useEffect, useMemo } from "react";
export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw Error(`Error`);
    }
    const { user } = context;
    useEffect(() => {
        if (user === undefined) {
            context.user = null;
        }
    }, [user]);
    return useMemo(() => context, [context]);
};
