import styled         from 'styled-components'
import { useContext } from 'react'
import { AppContext } from '../../App'
import useWindowSize  from '../utils/hooks/useWindowSize'

const ImageLayout = styled.div` //'till 800px md//
  display: grid;
  position:relative;
  grid-area: ${ props => props.ImageLayoutArea };
  place-self: center;
  width: 100%;
  height: 100%;
  
  &:after {
    display:grid;
    content: "";
    top:15%;
    bottom:0;
    left:52%;
    right:0;
    position: absolute;
    background-color: gold;
    border-radius: 50%;   
    place-self: center;
  }

  & > img {
    object-fit: contain;
    z-index: 1;
  }
`
const BeerImage = styled.img`
  display: grid;
  width: 10vw;
  max-width:140px ;
  height: auto;
  min-width: 65px;
  place-self: center;
  
`
export const ImageBeerModal = ({ InImageLayoutArea }) => {
  const [state] = useContext(AppContext)
  const { modalItem } = state
  const { width, height } = useWindowSize()

  return (
    <ImageLayout ImageLayoutArea={ InImageLayoutArea }>

      <BeerImage src={ modalItem?.image_url } alt={ modalItem?.name }/>

    </ImageLayout>

  )

}