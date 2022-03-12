import { AppContext }    from '../../App'
import { List }          from '../dumbs/List'
import { useContext }    from 'react'
import styled            from 'styled-components'
import { ItemGrid }      from './ScreenComposition'
import { BeerModal }     from '../modals/BeerModal'
import { BeerListItems } from '../dumbs/BeerListItems'
import { Pages }         from '../dumbs/Pages'

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
  const { db, currentPage } = state
  const cookies = JSON.parse(localStorage.getItem('Favorites'))

  return (
    <MainLayout bg={ 'whitesmoke' } area={ 'main' }>
      <BeerModal/>
      <ItemGrid area={ 'nbeers' } pad={ '3% 0 0 12%' }>
        { !state.isFavOpen ?
          <h5> { db.length } Beers</h5> :
          <h5>{ cookies.length }</h5> }
      </ItemGrid>
      <ItemGrid pad={ '3% 12% 0 0' } ps={ 'center end' }  area={ 'npages' }>
        <Pages/>
      </ItemGrid>
      { !state.isFavOpen ?
        <List arrayIn={ db }> <BeerListItems/> </List> :
        <List arrayIn={ cookies }><BeerListItems/> </List> }
    </MainLayout>
  )
}