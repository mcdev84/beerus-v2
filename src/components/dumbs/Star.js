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
  const handleFavorite = (item) => {

    const cookies = JSON.parse(localStorage.getItem(('Favorites')))
                      ?.filter(el => el.id !== item.id) ?? []
    if (!isFavorites) {
      localStorage.setItem('Favorites',
        JSON.stringify(([...cookies, item])))
      setIsFavorites(!isFavorites)
    } else {
      const index = cookies.indexOf(item)
      cookies.splice(index, 1)
      localStorage.setItem('Favorites',
        JSON.stringify((cookies)))
      setIsFavorites(!isFavorites)
    }
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