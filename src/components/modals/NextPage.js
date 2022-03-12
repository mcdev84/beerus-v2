import styled                            from 'styled-components'
import { ItemGrid }                      from '../layout/ScreenComposition'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import { useContext }                    from 'react'
import { AppContext }                    from '../../App'

const NextPageLayout = styled.section`
  display: grid;
  grid-area: ${ props => props.area };
  grid-template-areas: "nBeer arrow";
  grid-template-columns: auto;
  grid-template-rows: auto;
  place-items: center;
  place-content: center;
  place-self: center;
  background-color: gold;
  padding: 2% 2% 2% 2%;
  border-radius: 3px;
`

const NextBeerText = styled.h6`
  font-size: clamp(0.5em, 0.8em, 1.2em);
`

export const NextPage = (area) => {
  const [state, dispatch] = useContext(AppContext)
  const { isModal, db, modalItemIndex } = state

  return (
    <NextPageLayout area={ area }>
      <ItemGrid area={ 'nBeer' }
                ps={ 'center' } pi={ 'center start' }
                m={ '0 0 0 0' }>
        <NextBeerText>
          { db[modalItemIndex - 1]?.name }
        </NextBeerText>


      </ItemGrid>
      <ItemGrid area={ 'arrow' } ps={ 'center ' }
                pi={ 'start end' }
                m={ '0 0 6% 0' }>
        <GoChevronRight color={ 'gray' }/>
      </ItemGrid>
    </NextPageLayout>
  )
}