import styled         from 'styled-components'
import { RegularNav } from '../layout/RegularNav'
import { AppContext } from '../../App'
import { useContext } from 'react'

const ModalNav = styled.header`
  width: 100%;
  display: grid;
  grid-area: ${ props => props.area };
  grid-template-areas: "allbeers random favorites";
  grid-template-columns: 50% 2fr 2fr;
  grid-template-rows: auto;
  background-color: ${ props => props.bg };
  padding: 0 6% 1%;
`
export const ModalNavigation = () => {
  const [state, dispatch] = useContext(AppContext)
  const { isModal } = state
  const handleAllBeers = () => dispatch({ type: 'MODAL_TOGGLE' })

  return (
    <>
      <ModalNav bg={ 'black' }>
        <RegularNav name={ 'All beers' } area={ 'allbeers' }
                    area1={ 'random' } area2={ 'favorites' }
                    handleClick={ handleAllBeers }/>
      </ModalNav>
    </>
  )
}