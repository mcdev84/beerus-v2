import { useContext }                    from 'react'
import { AppContext }                    from '../../App'
import { ItemGrid }                      from '../layout/ScreenComposition'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import { BeerText }                      from './NextBeer'
import styled                            from 'styled-components'
import { truncateString }                from '../utils/assets/useful'

const PrevPageLayout = styled.section`
  display: grid;
  grid-area: ${ props => props.area };
  grid-template-areas: "arrow0 nBeer0";
  grid-template-columns: auto;
  grid-template-rows: ${ props => props.row };
  place-self: center start;

  background-color: gold;
  padding: 2% 2% 2% 2%;
  border-radius: 3px;
  margin: 5% 0 0 0;
  height: ${ props => props.height };
`

export const PrevBeer = (area, height) => {
  const [state, dispatch] = useContext(AppContext)
  const { isModal, db, modalItem } = state
  const prevIndex = (db.indexOf(modalItem) - 1) > 0
    ? db.indexOf(modalItem) - 1 : 0
  const prevItem = db[prevIndex]
  const handlePrev = () => dispatch(
    { type: 'PREV_ITEM', payload: db[prevIndex] })

  return (
    <PrevPageLayout height={ height } area={ area }>
      <ItemGrid area={ 'nBeer0' }
                ps={ 'end' } pi={ 'center start' }
                m={ '0 0 0 0' }>
        <BeerText>
          { prevIndex !== 0
            ? truncateString(prevItem.name, 12)
            : null }
        </ BeerText>
      </ItemGrid>
      <ItemGrid area={ 'arrow0' } ps={ 'center ' }
                m={ '0 0 25% 0' }>
        <GoChevronLeft color={ 'gray' } onClick={ () => handlePrev() }/>
      </ItemGrid>
    </PrevPageLayout>
  )
}