import { Container, Row }                     from 'react-bootstrap'
import { List }                               from '../dumbs/List'
import { createContext, useEffect, useState } from 'react'
import { Header }                             from '../htmlComponents/Header'
import { SingleBeer }                         from '../modals/SingleBeer'
import Stars                                  from '../dumbs/Stars'
import app                                    from '../../App'

export const AppContext = createContext()

export const ScreenLayout = () => {
  const [appState, setState] = useState({
    beers          : [],
    isModalBeerOpen: false,
    favItems       : [],
    modalItem      : {},
    page           : {
      pageId : 1,
      pagePer: 25,
    },
    random         : false,
    favIsOpen      : false,
    search         : false,
    beerSearch     : '',
    foodSearch     : '',
  })
  const {
          beers,
          favItems,
          favIsOpen,
          random,
          page,
          beerSearch,
          search,
          foodSearch,
        } = appState
  const { pageId, pagePer } = page
  const beermatch = 'beer_name='
  const foodmatch = 'food='
  const dinamicUrl =
          !random
            ? search ?
              `https://api.punkapi.com/v2/beers?${ beermatch }${ beerSearch }&${ foodmatch }${ foodSearch }`
              : `https://api.punkapi.com/v2/beers?page=${ pageId }&per_page=${ pagePer }`
            : `https://api.punkapi.com/v2/beers/random `

  useEffect(async () => {
    let response = await fetch(dinamicUrl)
      .then(resolve => resolve.json())
      .then(
        res => setState({ ...appState, beers: appState.beers = res }))
  }, [dinamicUrl])


  return (
    <>
      <AppContext.Provider value={ [appState, setState] }>
        <Header/>

        <main><SingleBeer/>
          <Container fluid>

            { favIsOpen ? <List array={ favItems }/> :
              <List array={ beers }/> }

          </Container>
        </main>

        <footer>
        </footer>
      </AppContext.Provider>
    </>
  )
}