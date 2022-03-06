import { Col, Container } from 'react-bootstrap'
import { TopNav }         from './TopNav'
import { SearchBar }           from '../dumbs/SearchBar'
import { AppContext, beersDb } from '../layout/ScreenLayout'
import { useContext }          from 'react'

export const Header = () => {
  const [appState, setState, beersDb] = useContext(AppContext)
  const { beerSearch, abvGt, abvLt } = appState

  const handleName = (e) =>
    setState(prev => ({
      ...prev,
      beerSearch: prev.beerSearch = e.target.value,
      url       : prev.url=`https://api.punkapi.com/v2/beers?beer_name=${ beerSearch }&?food=${ beerSearch }&?abv_gt=${ abvGt }&?abv_lt=${ abvLt }`,
    }))

  const handleAbvGt = (e) =>
    setState(prev => ({
      ...prev,
      abvGt: e.target.value!=='' ? prev.abvGt=e.target.value : prev.abvGt='_',
      url       : prev.url=`https://api.punkapi.com/v2/beers?beer_name=${ beerSearch }&?food=${ beerSearch }&?abv_gt=${ abvGt }&?abv_lt=${ abvLt }`,
    }))

  const handleAbvLt = (e) => {

    setState(prev => ({
      ...prev,
      abvLt: e.target.value!=='' ? prev.abvLt=e.target.value : prev.abvLt='_',
      url       : prev.url=`https://api.punkapi.com/v2/beers?beer_name=${ beerSearch }&?food=${ beerSearch }&?abv_gt=${ abvGt }&?abv_lt=${ abvLt }`,
    }))
  }

  const inputCapture = [handleName, handleAbvGt, handleAbvLt]

  return (
    <>
      <header>
          <TopNav/>
          <Container fluid className="bg-dark">
            <Container fluid>
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