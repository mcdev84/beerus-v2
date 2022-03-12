import { ItemGrid } from './ScreenComposition'
import { useContext } from 'react'
import { AppContext } from '../../App'

export const RegularNav = ({
  name,
  area,
  area1,
  area2,
  handleClick,
  modal,
}) => {
  const [state, dispatch] = useContext(AppContext)
  const { isModal } = state
  const cookies = JSON.parse(localStorage.getItem('Favorites'))
  const handleRandom = () => dispatch({ type: 'RANDOM' })
  const handleFavs = () => dispatch({ type: 'OPEN_FAVS', payload: cookies })

  return (
    <>
      < ItemGrid ps={ 'center start' }
                 color={ 'gold' }
                 area={ area }
                 onClick={ () => handleClick() }
                 modal={ isModal }>{ name }</ItemGrid>

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