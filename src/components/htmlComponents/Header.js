import { Col, Container } from 'react-bootstrap'
import { TopNav }         from './TopNav'
import { SearchBar }           from '../dumbs/SearchBar'
import { AppContext, beersDb } from '../layout/ScreenLayout'
import { useContext }          from 'react'

export const Header = () => {
  const [appState, setState, beersDb] = useContext(AppContext)
  const { beerSearch, abvGt, abvLt } = appState

  const handleName = (e) =>
    setState(prevAppState => ({
      ...prevAppState,
      beerSearch: prevAppState.beerSearch = e.target.value,
      url       : `https://api.punkapi.com/v2/beers?beer_name=${ beerSearch }&?food=${ beerSearch }`,
    }))
  const handleAbvGt = (e) =>
    setState(prevAppState => ({
      ...prevAppState,
      abvGt: prevAppState.abvGt = e.target.value,
      url  : `https://api.punkapi.com/v2/beers?abv_gt=${ abvGt }`,
    }))
  const handleAbvLt = (e) =>
    setState(prevAppState => ({
      ...prevAppState,
      abvLt: prevAppState.abvLt = e.target.value,
      url  : `https://api.punkapi.com/v2/beers?abv_gt=${ abvGt }&?abv.lt=${ abvLt }`,
    }))

  const inputCapture = [handleName, handleAbvGt, handleAbvLt]

  return (
    <>
      <header>
        <Container fluid className="p-0">
          <TopNav/>
          <Container fluid className="bg-dark">
            <Col className="d-none d-sm-flex align-items-start"
                 xs={ { span: 4, offset: 6 } }
                 md={ { span: 4, offset: 6 } }
                 xl={ { span: 4, offset: 6 } }>
              <h6 style={ { color: 'lightgray' } }><small>Gradazione alcolica
                                                          (da
                                                          - a )</small></h6>
            </Col>
          </Container>
          <Container fluid className="d-none d-sm-flex p-0 bg-dark
						justify-content-between">
            <SearchBar span={ 4 }
                       offset={ 0 }
                       placeholder="Filtra per nome o abbinamento"
                       classname="top-search"
                       id={ 0 }
                       inputCapture={inputCapture}
            />

            <SearchBar span={ 3 } offset={ 2 } placeholder="DA"
                       classname="top-search"
                       id={ 1 }
                       inputCapture={inputCapture}/>
            <SearchBar span={ 3 } offset={ 0 } placeholder="A"
                       classname="top-search"
                       id={ 2 }
                       inputCapture={inputCapture}/>
          </Container>

          <Container fluid className="d-xs-flex d-sm-none p-0 top-search">
            <SearchBar colWidth={ 12 }/>
          </Container>
        </Container>
      </header>
    </>
  )
}