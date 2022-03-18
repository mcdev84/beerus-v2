import styled         from 'styled-components'
import { useContext } from 'react'
import { AppContext } from '../../App'

const ImageLayout = styled.div` //'till 800px md//
  display: flex;
  position: relative;
  grid-area: ${ props => props.ImageLayoutArea };
  place-self: center;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle, gold, gold 33%, transparent 33%);
  background-size: auto;
  background-repeat: no-repeat;

  &::after {
    display: flex;
    content: url(${ props => props.url });
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    position: absolute;
    justify-content: center;

  }`

export const ImageBeerModal = ({ InImageLayoutArea }) => {
  const [state] = useContext(AppContext)
  const { modalItem } = state

  return (
    <ImageLayout ImageLayoutArea={ InImageLayoutArea }
                 url={ modalItem?.image_url }>
    </ImageLayout>

  )

}