import styled     from 'styled-components'
import { Header } from './Header'
import { Main }   from './Main'

export const ItemGridTemplate = styled.section`
  display: ${ props => props.display };
  grid-template-areas: ${ props => props.areas };
  grid-area: ${ props => props.area };
  place-self: ${ props => props.ps };
  place-items: ${ props => props.pi };
  place-content: ${ props => props.pc };
  padding: ${ props => props.pad };
  border: ${ props => props.b };
  border-radius:3px;
  color: ${ props => props.color };
  text-color: ${ props => props.tcolor };
  margin: ${ props => props.m };
  background-color: ${ props => props.bg };
  background-position:${ props => props.bgp } ;
  background-content-box :${ props => props.bgc } ;
  width: ${ props => props.width };
  height: ${ props => props.height };
  grid-gap: ${ props => props.gap };
  box-shadow: ${ props => props.boxShad };
  grid-row:${ props => props.row };
`
export const ItemGrid=styled(ItemGridTemplate)
(props=>({border: props.modal && '1px solid gray'}))

export const ScreenComposition = () => {

  return (
    <>
      <Header/>
      <Main/>
    </>
  )
}