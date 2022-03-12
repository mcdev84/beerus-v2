import { useContext, useEffect, useState } from 'react'
import { AppContext }                      from '../../../App'

export default function useFetch (url) {
  const [data, setData] = useState(null)

  useEffect(async () => {
    setData(null)
    await fetch(url)
      .then(resolve => resolve.json())
      .then(res =>setData(res))
}, [url])
  return {data}
}

