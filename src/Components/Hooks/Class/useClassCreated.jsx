import { useState } from 'react'
// import { useAuthContext } from './useAuthContext'

export const useClassCreated = () => {
  const [error, setError] = useState({})
  const [isLoading, setIsLoading] = useState(null)

  const classCreated = async (newClass) => {
    setIsLoading(true);
    setError({});
    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER}/api/class/created`, {
        method: 'GET',
      });
      const data = await response.json();
      console.log(data)
      if (response.ok) {
        // dispatch({
        //     type: `LOGOUT`
        // })
        setIsLoading(false);
        setError(data)
      } else {
        setIsLoading(false);
        setError(data)
        console.error(`Fetal error`)
      }
    } catch (error) {
      console.error(`Fetal error: ${error}`)
    }
  }
  return { classCreated, isLoading, error }
}