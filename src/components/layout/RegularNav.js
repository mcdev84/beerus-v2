import { ItemGrid }   from './ScreenComposition'
import { useContext } from 'react'
import { AppContext } from '../../App'

export const RegularNav = ({ name, area, area1, area2 }) => {
  const [state, dispatch] = useContext(AppContext)
  const handleRandom = () => dispatch({ type: 'RANDOM' })
  const handleFavs = () => dispatch({ type: 'OPEN_FAVS' })

  return (
    <>
      < ItemGrid ps={ 'center start' }
                 color={ 'gold' }
                 area={ area }>{ name }</ItemGrid>

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