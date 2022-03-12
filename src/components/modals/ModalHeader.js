import styled         from 'styled-components'
import { ItemGrid }   from '../layout/ScreenComposition'
import { NextPage }   from './NextPage'
import { useContext } from 'react'
import { AppContext } from '../../App'
import { PrevPage }   from './PrevPage'

const ModalHead = styled.div`
  display: grid;
  grid-template-areas: "button title image button1"
                       "button description image button1";
  grid-template-columns: 0.5fr 1.5fr 1fr 0.5fr;
  grid-template-row: 50% 50%;
  place-se: center;
  padding: 5% 0 0 0;
  background: #020000;
  background: -moz-linear-gradient(top, hsla(0, 100%, 0%, 1) 50%, hsla(0, 0%, 99%, 1) 50%);
  background: -webkit-linear-gradient(top, hsla(0, 100%, 0%, 1) 50%, hsla(0, 0%, 99%, 1) 50%);
  background: linear-gradient(to bottom, hsla(0, 100%, 0%, 1) 50%, hsla(0, 0%, 99%, 1) 50%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#020000', endColorstr='#fcfcfc',GradientType=0);
`
const DivImage = styled.div` //'till 800px md
  position: relative;
  grid-area: ${ props => props.area };
  place-self:   center;
  width: 100%;
  height: auto;
  &:before {
    content: "";
    width: 62.5%;
    height: 52.5%;
    position: absolute;
    background-color: gold;
    border-radius: 50%;
    margin: 23.33% 0 0 17.75%
  }
`
const Image = styled.img`
  display: grid;
  position: relative;
  width: 30%;
  height: auto;
  margin-left: 35%
`
export const ModalHeader = () => {
  const [state, dispatch] = useContext(AppContext)
  const { isModal, db, modalItemIndex } = state

  return (

    <ModalHead>
      <PrevPage area={ 'button' } templateAreas={ 'nBeer0 arrow0' }/>
      <NextPage area={ 'button1' }/>
      <ItemGrid area={ 'title' } tcolor={ 'gold' } ps={'start center'}>
        <h5 style={ { color: 'gold' } }>
          <span> ✩</span>{ db[modalItemIndex]?.name }</h5>
        <h5 style={ { color: 'lightgray' } }>
          <span style={{visibility:'hidden'}}> ✩</span>{ db[modalItemIndex]?.tagline }</h5>
      </ItemGrid>

      <ItemGrid area={ 'description' } ps={'start'} m={'0 0 0 0'}>
        <h6>{ db[modalItemIndex]?.description }</h6>
      </ItemGrid>
      <DivImage area={ 'image' }>
        <Image src={ db[modalItemIndex]?.image_url }/>
      </DivImage>
    </ModalHead>
  )
}