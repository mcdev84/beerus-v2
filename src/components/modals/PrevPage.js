import { useContext }                    from 'react'
import { AppContext }                    from '../../App'
import { ItemGrid }                      from '../layout/ScreenComposition'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import { BeerText }                      from './NextPage'
import styled                            from 'styled-components'

const PrevPageLayout = styled.section`
  display: grid;
  grid-area: ${ props => props.area };
  grid-template-areas: "arrow0 nBeer0";
  grid-template-columns: auto;
  grid-template-rows: 100%;
  place-self: center;
  background-color: gold;
  padding: 2% 2% 2% 2%;
  border-radius: 3px;
  margin: 5% 0 0 0;
`

export const PrevPage = (area) => {
  const [state, dispatch] = useContext(AppContext)
  const { isModal, db, modalItemIndex } = state

  return (
    <PrevPageLayout area={ area }>
      <ItemGrid area={ 'nBeer0' }
                ps={ 'center' } pi={ 'center start' }
                m={ '0 0 0 0' }>
        <BeerText>
          { (db[modalItemIndex - 3]) && db[modalItemIndex - 3]?.name }
        </ BeerText>


      </ItemGrid>
      <ItemGrid area={ 'arrow0' } ps={ 'center ' }
                pi={ 'start end' }
                m={ '0 0 6% 0' }>
        <GoChevronLeft color={ 'gray' }/>
      </ItemGrid>

    </PrevPageLayout>
  )
}