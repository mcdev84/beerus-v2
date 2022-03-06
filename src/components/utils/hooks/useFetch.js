import { useEffect, useState } from 'react'

export default function useFetch (url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)

  useEffect(async () => {
    setLoading('loading')
    setData(null)
    setError(null)
    let response = await fetch(url)
      .then(resolve => resolve.json())
      .then(res => setData(res))
      .catch(err => {
        setLoading(false)
        setError('An error occurred')
      })
  }, [url])

  return { data, loading, error }
}

