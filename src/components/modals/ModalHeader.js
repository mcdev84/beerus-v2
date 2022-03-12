import styled                                  from 'styled-components'
import { ItemGrid }                            from '../layout/ScreenComposition'
import { NextPage }                            from './NextPage'
import { useContext, useLayoutEffect, useRef } from 'react'
import { AppContext }                          from '../../App'
import { PrevPage }                            from './PrevPage'
import { Modal }                               from 'react-bootstrap'

const ModalHead = styled(Modal.Header)`
  display: grid;
  grid-template-areas: "button title image button1"
                       "... description image ...";
  grid-template-columns: repeat(1,auto-fit,minmax(25px, 25%))
  repeat(2,auto-fit,minmax(50px,50%)) repeat(1,auto-fit,minmax(25px, 25%)) ;
  grid-template-row: 600px;
  padding: 5% 0 5% 0;
  background: #020000;
  /*  background: -moz-linear-gradient(top, hsla(0, 100%, 0%, 1) 50%, hsla(0, 0%, 99%, 1) 50%);
    background: -webkit-linear-gradient(top, hsla(0, 100%, 0%, 1) 50%, hsla(0, 0%, 99%, 1) 50%);*/
  background: linear-gradient(to bottom, hsla(0, 100%, 0%, 1) 50%, hsla(0, 0%, 99%, 1) 50%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#020000', endColorstr='#fcfcfc',GradientType=0);
`
const DivImage = styled.div` //'till 800px md
  position: relative;
  grid-area: ${ props => props.area };
  place-self: center;
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
  width:  33.33% ;
  height: auto;
  margin-left: 35%
`

export const ModalHeader = () => {
  const [state] = useContext(AppContext)
  const { db, modalItem } = state

  return (

    <ModalHead>

      <PrevPage area={ 'button' } templateAreas={ 'nBeer0 arrow0' }/>
      <NextPage area={ 'button1' } templateAreas={ 'nBeer arrow' }/>

      <ItemGrid area={ 'title' } tcolor={ 'gold' } ps={ 'start stretch ' }
                m={ '0 0 0 0' } height={'minmax(10em,15em)'}>

        <h5 style={ { color: 'gold' } }>
          <span> ✩</span>{ modalItem.name }</h5>
        <h5 style={ { color: 'lightgray' } }>
          <span
            style={ { visibility: 'hidden' } }> ✩</span>{ modalItem?.tagline }
        </h5>
      </ItemGrid>

      <ItemGrid area={ 'description' } ps={ 'start' } gap={ '0 50%' }>
        <h6 style={ { color: 'gold' } }>{ modalItem?.description }</h6>
      </ItemGrid>

      <DivImage area={ 'image' }>
        <Image src={ modalItem?.image_url }/>
      </DivImage>
    </ModalHead>

  )
}