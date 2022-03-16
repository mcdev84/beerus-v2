import { ItemGrid }   from './ScreenComposition'
import { useContext } from 'react'
import { AppContext } from '../../App'

export const TopNav = ({ area, area1, area2 }) => {
  const [state, dispatch] = useContext(AppContext)
  const { isModal } = state
  const cookies = JSON.parse(localStorage.getItem('Favorites'))
  const handleClick = () => dispatch({ type: 'MODAL_TOGGLE' })
  const handleRandom = () => dispatch({ type: 'RANDOM' })
  const handleFavs = () => dispatch({ type: 'OPEN_FAVS', payload: cookies })
  const first = isModal ? 'All beers' : 'BREWDOG'

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
                 onClick={ () => handleRandom() }>Random Beer</ItemGrid>

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