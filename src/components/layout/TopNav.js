import { ItemGrid }   from './ScreenComposition'
import { useContext } from 'react'
import { AppContext } from '../../App'
import styled         from 'styled-components'

const Brand = styled.h5`
  color: gold;
  animation: glow 2s ease-in-out infinite alternate;
  @keyframes glow {
    from {
      text-shadow: 0 0 10px gold, 0 0 15px gold, 0 0 20px gold, 0 0 25px gold;
    } 
    to {
      text-shadow:0 0 20px gold, 0 0 25px gold, 0 0 30px gold;
    }
  }
`

export const TopNav = ({ area, area1, area2 }) => {
  const [state, dispatch] = useContext(AppContext)
  const { isModal } = state
  const cookies = JSON.parse(localStorage.getItem('Favorites'))
  const handleClick = () => dispatch({ type: 'MODAL_TOGGLE' })
  const handleRandom = () => dispatch({ type: 'RANDOM' })
  const handleFavs = () => dispatch({ type: 'OPEN_FAVS', payload: cookies })
  const first = isModal ? 'All beers' : <Brand>BREWDOG</Brand>
  const random = window.innerWidth < 472 ? 'Random' : 'Random Beer'
  return (
    <>
      < ItemGrid ps={ 'center start' }
                 color={ 'gold' }
                 area={ area }
                 onClick={ () => isModal && handleClick() }
                 modal={ isModal }>{ first }
      </ItemGrid>

      < ItemGrid b={ '1px solid gray' }
                 ps={ 'center end' }
                 pad={ '0.2em' }
                 color={ 'gold' }
                 area={ area1 }
                 onClick={ () => handleRandom() }>{ random }</ItemGrid>

      < ItemGrid b={ '1px solid gray' }
                 ps={ 'center end' }
                 pad={ '0.2em' }
                 color={ 'gold' }
                 area={ area2 }
                 onClick={ () => handleFavs() }>Favorites
      </ItemGrid>
    </>
  )
}