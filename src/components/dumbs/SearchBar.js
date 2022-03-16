import { ItemGrid }   from '../layout/ScreenComposition'
import { useContext } from 'react'
import { AppContext } from '../../App'
import styled         from 'styled-components'

const Search = styled.input`
  background-color: black;
  color: white;
  placeholder: ${ props => props.placeholder };
  border-bottom: 1px solid gold;
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0.25em;

`
export const SearchBar = ({ area, area1, area2 }) => {
  const [, , dispatch] = useContext(AppContext)
  const handleSearchName = (e) => dispatch(
    { type: 'SEARCH_NAME_FOOD', payload: e.target.value })
  const handleSearchMin = (e) => dispatch(
    { type: 'SEARCH_MIN', payload: e.target.value })
  const handleSearchMax = (e) => dispatch(
    { type: 'SEARCH_MAX', payload: e.target.value })

  return (
    <>
      < ItemGrid area={ area }
                 ps={ 'center start' }>
        <Search placeholder={ 'Filtra per Nome/Abbinamento' }
                onChange={ (e) => handleSearchName(e) }/>
      </ItemGrid>

      < ItemGrid area={ area1 }
                 ps={ 'center end' }>
        <Search placeholder={ 'Da' }
                onChange={ (e) => handleSearchMin(e) }/>
      </ItemGrid>

      < ItemGrid area={ area2 }
                 ps={ 'center start' }
                 onChange={ (e) => handleSearchMax(e) }>
        <Search placeholder={ 'A' }/>
      </ItemGrid>
    </>
  )
}