import styled     from 'styled-components'
import { Header } from './Header'
import { Main }   from './Main'

export const ItemGrid = styled.section`
  grid-area: ${ props => props.area };
  place-self: ${ props => props.ps };
  place-items: ${ props => props.pi };
  place-content: ${ props => props.pc };
  padding: ${ props => props.pad };
  border: ${ props => props.b };
  color: ${ props => props.color };
  text-color: ${ props => props.tcolor };
  margin: ${ props => props.m };
  background-color: ${ props => props.bg };
  background-position:${ props => props.bgp } ;
  background-content-box :${ props => props.bgc } ;
`

export const ScreenComposition = () => {

  return (
    <>
      <Header/>
      <Main/>
    </>
  )
}