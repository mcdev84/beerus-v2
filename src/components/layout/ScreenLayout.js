import { Container, Row }                     from 'react-bootstrap'
import { List }                               from '../dumbs/List'
import { createContext, useEffect, useState } from 'react'
import { Header }                             from '../htmlComponents/Header'
import { SingleBeer }                         from '../modals/SingleBeer'
import Stars                                  from '../dumbs/Stars'
import app                                    from '../../App'

export const AppContext = createContext()
export const beersDb = []

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
    beerSearch     : '_',
    alcMax         : '_',
    alcMin         : '_',
    abvGt          : '0',
    abvLt          : '56',
    url            : 'https://api.punkapi.com/v2/beers',

  })
  const {
          beers,
          favItems,
          favIsOpen,
          random,
          page,
          beerSearch,
          abvGt,
          abvLt,

        } = appState

  const { pageId, pagePer } = page

  useEffect(async () => {
    let response = await fetch(appState.url)
      .then(resolve => resolve.json())
      .then(res => {
        res.map(item => beersDb.push(item))
        setState({ ...appState, beers: appState.beers = res })
      })
  }, [appState.url,random,beerSearch,abvGt,abvLt ])
  console.log(beers)
  return (
    <>
      <AppContext.Provider value={ [appState, setState, beersDb] }>
        <Header/>

        <main>
          <SingleBeer/>
          <Container fluid className="mybody">

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