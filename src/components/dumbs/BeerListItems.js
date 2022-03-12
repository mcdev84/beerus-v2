import { ItemGrid }   from '../layout/ScreenComposition'
import { useContext } from 'react'
import { AppContext } from '../../App'
import { Star }       from './Star'

export const BeerListItems = ({item}) => {
  const [state, dispatch] = useContext(AppContext)
  const { beersInPage, isModal } = state
  const handleModal = (item) =>
    dispatch({ type: 'MODAL_OPEN', payload:item })
  return (
    <>
      <ItemGrid ps={ 'center start' }
                area={ 'name' }
                onClick={ () => handleModal(item) }>
        { item.name }</ItemGrid>
      <ItemGrid ps={ 'center end' }
                area={ 'abv' }>{ item.abv }</ItemGrid>
      <ItemGrid ps={ 'center end' }
                m={ '0 0 5.5% 0' } area={ 'star' }>
        <Star key={ item.id } item={ item }/>
      </ItemGrid>
      </>
      )
      }