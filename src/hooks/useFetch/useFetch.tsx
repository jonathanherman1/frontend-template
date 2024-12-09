import { useEffect, useState } from 'react'
import type { ApiResponse } from '@/types'

export const useFetch = <T,>(fetchFunction: () => Promise<ApiResponse<T>>) => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true
    setLoading(true)
    fetchFunction()
      .then((res) => {
        if (isMounted) {
          if (res.success) {
            setData(res.data)
            setError(null)
          } else {
            setError(res.message || 'Failed to fetch data')
          }
        }
      })
      .catch(() => {
        if (isMounted) {
          setError('An error occurred while fetching data')
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false)
        }
      })

    return () => {
      isMounted = false
    }
  }, [fetchFunction])

  return { data, loading, error }
}
