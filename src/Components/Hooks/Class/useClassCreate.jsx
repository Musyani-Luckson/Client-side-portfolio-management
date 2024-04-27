import { useState } from 'react'
import { useClassContext } from '../useClassContext'

export const useClassCreate = () => {
    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState()
    const { dispatch, classes } = useClassContext();
    const classCreate = async (newClass) => {
        const body = JSON.stringify(newClass)
        setIsLoading(true);
        setError({});
        try {
            const response = await fetch(`${import.meta.env.VITE_SERVER}/api/class/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body
            });
            const data = await response.json();
            if (response.ok) {
                if (data.class) {
                    dispatch({
                        type: `CREATE`,
                        payload: [data.class, ...classes]
                    });
                }
                setIsLoading(false);
                setError(data);
            } else {
                setIsLoading(false);
                setError(data)
                // console.error(`Fetal error`)
            }
        } catch (error) {
            // console.error(`Fetal error: ${error}`)
        }
    }
    return { classCreate, isLoading, error }
}