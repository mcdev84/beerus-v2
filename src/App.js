import './App.css'
import { ScreenComposition }                    from './components/layout/ScreenComposition'
import { createContext, useEffect, useReducer } from 'react'
import { reducer }                              from './store/reducer'

export const AppContext = createContext()

function App () {
  const [state, dispatch] = useReducer(reducer, {
    db         : [],
    favs       : [],
    beerName   : '_',
    abvGt      : '0',
    abvLt      : '56',
    random     : false,
    isFavOpen  : false,
    isModal    : false,
    modalItem  : null,
    currentPage: 1,
  })
  const { currentPage, random, beerName, abvGt, abvLt } = state
  const url = random ? 'https://api.punkapi.com/v2/beers/random' :
    `https://api.punkapi.com/v2/beers?beer_name=${ beerName }&?food=${ beerName }&abv_gt=${ abvGt }&abv_lt=${ abvLt }&page=${ currentPage }`

  const handleInit = (res) => dispatch({ type: 'INIT', payload: res })
  useEffect(async () => {
    await fetch(url)
      .then(resolve => resolve.json())
      .then(res => handleInit(res))
  }, [random, beerName, abvGt, abvLt,currentPage])

  return (
    <div className={ 'App' }>
      <AppContext.Provider value={ [state, dispatch] }>
        <ScreenComposition/>
      </AppContext.Provider>
    </div>
  )
}

export default App
