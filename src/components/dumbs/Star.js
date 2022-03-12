import styled                           from 'styled-components'
import { BsStar, BsStarFill }           from 'react-icons/bs'
import { useContext, useRef, useState } from 'react'
import { AppContext }                   from '../../App'

const StarFill = styled(BsStarFill)`
  color: ${ props => props.isClicked && 'gold' }
`
export const Star = ({ item }) => {
  const [state, dispatch] = useContext(AppContext)

  const addFavorite = (item) => {
    const f= JSON.parse(localStorage.getItem(('Favs'||[])))
    f.push(item)

    localStorage.setItem('Favs', JSON.stringify(f))
    console.log( f,JSON.parse(localStorage.getItem('Favs')))
  }
  const removeFavorite = (item) => {
    const filteredLocal = JSON.parse(localStorage
        .getItem('Favorites'))
      .filter(el => el.id !== item.id)
    localStorage.setItem('Favorites', JSON.stringify(filteredLocal))
  }

  return (
    <>
      <BsStar onClick={ () => addFavorite(item) }/>
      {/*{ isInFavorite() ?
       <BsStarFill color={ 'gold' } onClick={ () =>removeFavorite }/>
       :
       }*/ }
      {/*{ isClicked ?
       <StarFill key={ item.id } isClicked={ isClicked }
       onClick={ () => handleClicked() }/>
       : <BsStar key={ item.id } isClicked={ isClicked }
       onClick={ () => handleClicked() }/> }*/ }
    </>
  )
}