import { useAuthContext } from './useAuthContext'
export const useLogOut = () => {
    const { dispatch } = useAuthContext();
    const logOut = async (sid, password) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_SERVER}/api/user/logout`, {
                method: 'GET',
            });
            const responseData = await response.json();
            if (response.ok) {
                dispatch({
                    type: `LOGOUT`
                })
            } else {
                console.error(`Fetal error`)
            }
        } catch (error) {
            console.error(`Fetal error: ${error}`)
        }
    }
    return { logOut }
}