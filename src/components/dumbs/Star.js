import styled                 from 'styled-components'
import { BsStar, BsStarFill } from 'react-icons/bs'
import { useState }           from 'react'

const StarF = styled(BsStarFill)`
  :hover {
    color: white
  }
`
const StarFilled = styled(StarF)(props => props.favorites && { color: 'gold' })

export const Star = ({ item }) => {
  const [isFavorites, setIsFavorites] = useState(false)
  const handleFavorite = (pref) => {
    const cookies = Array.from(new Set(JSON.parse(localStorage.getItem(('Favorites')))))
    if (!isFavorites) {
      localStorage.setItem('Favorites',
        JSON.stringify(([...cookies, pref])))
    } else {
      const index = cookies.indexOf(pref)
      cookies.splice(index, 1)
      localStorage.setItem('Favorites',
        JSON.stringify((cookies)))
    }
    setIsFavorites(!isFavorites)
  }

  return (
    <>
      { isFavorites ? <StarFilled favorites={ isFavorites }
                                  onClick={ () => handleFavorite(item) }/>
        : <BsStar onClick={ () => handleFavorite(item) }/>
      }
    </>
  )
}