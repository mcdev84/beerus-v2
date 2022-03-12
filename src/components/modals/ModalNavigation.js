import styled         from 'styled-components'
import { RegularNav } from '../layout/RegularNav'

const ModalNav = styled.header`
  width: 100%;
  display: grid;
  grid-area: ${ props => props.area };
  grid-template-areas: "allbeers random favorites";
  grid-template-columns: 50% 2fr 2fr;
  grid-template-rows: auto;
  background-color: ${ props => props.bg };
`
export const ModalNavigation = () => {

  return (
    <>
      <ModalNav bg={ 'black' }>
        <RegularNav name={ 'All beers' } area={ 'allbeers' }
                    area1={ 'random' } area2={ 'favorites' }/>
      </ModalNav>
    </>
  )
}