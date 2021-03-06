import styled             from 'styled-components'
import { useContext }     from 'react'
import { AppContext }     from '../../App'
import { PrevBeer }       from './PrevBeer'
import { NextBeer }       from './NextBeer'
import { ItemGrid }       from '../layout/ScreenComposition'
import { ImageBeerModal } from './BeerImage'
import { truncateString } from '../utils/assets/useful'

const ModalHeaderLayout = styled.div`
  display: grid;
  width: 100%;
  grid-area: body;
  grid-template-areas: "button title image button1"
                       "... description image ...";
  grid-template-columns: repeat(1, minmax(25px, .25fr))
                         repeat(2, minmax(50px, 1fr))
                         repeat(1, minmax(25px, .25fr));
  grid-template-rows: repeat(2, minmax(10em, 15vw));
  background: #020000;
  background: -moz-linear-gradient(top, hsla(0, 100%, 0%, 1) 50%, hsla(0, 0%, 100%, 1) 50%);
  background: -webkit-linear-gradient(top, hsla(0, 100%, 0%, 1) 50%, hsla(0, 0%, 100%, 1) 50%);
  background: linear-gradient(to bottom, hsla(0, 100%, 0%, 1) 50%, hsla(0, 0%, 100%, 1) 50%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#020000', endColorstr='#fcfcfc',GradientType=0);
  padding: 0 6% 0 6%;
  margin-bottom: 15vh
`
const Text = styled.p`
  color: ${ props => props.color };
  font-size: clamp(0.8rem, 2vw, 2rem);
`
export const ModalBody = () => {
  const [state] = useContext(AppContext)
  const { modalItem } = state

  return (

    <ModalHeaderLayout>
      <PrevBeer area={ 'button' }
                templateAreas={ 'nBeer0 arrow0' }/>
      <NextBeer area={ 'button1' }
                templateAreas={ 'nBeer arrow' }/>
      <ItemGrid area={ 'title' } color={ 'gold' } ps={ 'start stretch ' }
                m={ '0 0 0 0' } pad={ '0 0 0 6%' }
                height={ 'minmax(10em,15em)' }>
        <h5>{ modalItem.name } </h5>
        <h5 style={ {
          color : 'gray',
          margin: '0 0 0 16.3167px',
        } }> { modalItem.tagline } </h5>
      </ItemGrid>

      <ItemGrid area={ 'description' } ps={ 'start' } pad={ '6% 0 0 6%' }>
        <Text color={ 'gold' }
        >{ truncateString(modalItem.description, 230) }</Text>
      </ItemGrid>

      <ImageBeerModal InImageLayoutArea={ 'image' }/>
    </ModalHeaderLayout>

  )
}