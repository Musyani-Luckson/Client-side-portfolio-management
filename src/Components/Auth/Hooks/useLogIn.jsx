import { useEffect, useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useLogIn = () => {
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext();
    const logIn = async (sid, password) => {
        setIsLoading(true);
        setError();
        try {
            const response = await fetch(`${import.meta.env.VITE_SERVER}/api/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    sid, password
                })
            });
            const data = await response.json();
            if (response.ok) {
                dispatch({
                    type: `LOGIN`,
                    payload: data.user
                })
                setIsLoading(false);
                setError(data)
            } else {
                setIsLoading(false);
                setError(data)
                if (response.status === 401) {
                    console.error('Unauthorized access: Please check your credentials.');
                } else {
                    console.error('Unexpected error:', response.statusText);
                }
            }
        } catch (error) {
            console.error('Error occurred:', error);
        }
    }
    return { logIn, isLoading, error }
}