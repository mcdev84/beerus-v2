import styled             from 'styled-components'
import { ItemGrid }       from '../layout/ScreenComposition'
import { GoChevronRight } from 'react-icons/go'
import { useContext }     from 'react'
import { AppContext }     from '../../App'
import { truncateString } from '../utils/assets/useful'

const NextPageLayout = styled.section`
  display: grid;
  grid-area: ${ props => props.area };
  grid-template-areas: "nBeer arrow";
  grid-template-columns: auto;
  grid-template-rows: ${ props => props.row };
  place-self: center end;
  background-color: gold;
  padding: 2% 2% 2% 2%;
  border-radius: 3px;
  margin: 0 6% 0 0;
`
export const BeerText = styled.h6`
  font-size: clamp(0.5em, 0.8em, 1.2em);
`

export const NextBeer = () => {
  const [state, dispatch] = useContext(AppContext)
  const { isModal, db, modalItem } = state
  const nextIndex = db.indexOf(modalItem) + 1
  const nextItem = db[nextIndex]
  const handleNext =()=>dispatch({type:'NEXT_ITEM', payload:db[nextIndex]})

  return (
    <NextPageLayout >
      <ItemGrid area={ 'nBeer' }
                ps={ 'center' } pi={ 'center' }
                m={ '0 0 0 0' }>
        <BeerText>
          { truncateString (nextItem.name,12) }
        </BeerText>

      </ItemGrid>
      <ItemGrid area={ 'arrow' } ps={ 'center ' }
                pi={ 'start end' }
                m={ '0 0 25% 0' }>
        <GoChevronRight  color={ 'gray' } onClick={()=>handleNext()}/>
      </ItemGrid>

    </NextPageLayout>
  )
}