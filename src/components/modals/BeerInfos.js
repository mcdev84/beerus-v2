import { AppContext } from '../../App'
import { useContext } from 'react'
import styled         from 'styled-components'
import { ItemGrid }   from '../layout/ScreenComposition'

const BeerInfosLayout = styled.section`
  display: grid;
  grid-area: ${ props => props.area };
  grid-template-areas: "... abv srm ebc ibu ph ...";
  grid-template-columns: auto;
  grid-template-rows: auto;
  background-color: gold;
  color: white;
  font-family: Georgia;
  place-content:center space-around;
`
export const BeerInfos = ({ area }) => {
  const [state, dispatch] = useContext(AppContext)
  const { modalItem } = state
  const listParams = ['abv', 'srm', 'ebc', 'ibu', 'ph']

  return (
    <BeerInfosLayout>
      { listParams.map(item =>
        <ItemGrid key={ item } area={ item } ps={'center'} >
          { `${ item.toUpperCase() }: ${ modalItem[item] }` }
        </ItemGrid>,
      ) }
    </BeerInfosLayout>
  )
}