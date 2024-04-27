import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
export const useSignUp = () => {
    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext();

    const signUp = async credentials => {
        const { fullname, email, sid, password } = credentials;
        setIsLoading(true);
        setError({});
        try {
            const response = await fetch(`${import.meta.env.VITE_SERVER}/api/user/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
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
    return { signUp, isLoading, error }
}
