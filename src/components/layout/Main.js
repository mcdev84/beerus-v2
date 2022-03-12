import { AppContext }  from '../../App'
import { List }        from '../dumbs/List'
import { useContext }  from 'react'
import styled          from 'styled-components'
import { ItemGrid }    from './ScreenComposition'
import { BeerDetails } from '../modals/BeerDetails'

const MainLayout = styled.main`
  display: grid;
  grid-template-areas: "nbeers npages"
                       "c c";
  grid-template-columns: 1fr 1fr;
  grid-template-row: auto;
  background-color: ${ props => props.bg };
`
export const Main = () => {
  const [state, dispatch] = useContext(AppContext)
  const { db } = state
  const cookies =()=> JSON.parse(localStorage.getItem('Favorites'))

  return (
    <MainLayout bg={ 'whitesmoke' } area={ 'main' }>
      <BeerDetails/>
      <ItemGrid area={ 'nbeers' } pad={ '3% 0 0 12%' }>
        {!state.isFavOpen ?
          db.length :
          cookies.length } Birre </ItemGrid>
      <ItemGrid pad={ '3% 12% 0 0' } ps={ 'center end' }
                area={ 'npages' }>1234</ItemGrid>
      { !state.isFavOpen ?
        <List arrayIn={ db }/> :
        <List arrayIn={ cookies }/> }
    </MainLayout>
  )
}