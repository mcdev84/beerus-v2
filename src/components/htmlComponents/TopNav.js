import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { AppContext }                       from '../layout/ScreenLayout'
import { useContext }                       from 'react'

export const TopNav = () => {

  const [appState, setState,beersDb] = useContext(AppContext)

  let clicked

  const handleFavorites = () =>
    setState(prevAppState => ({
      ...prevAppState,
      favIsOpen: !prevAppState.favIsOpen,
    }))

  const handlRandom = () =>
    setState(prevAppState => ({
      ...prevAppState,
      random: !prevAppState.random,
      url: 'https://api.punkapi.com/v2/beers/random',
    }))

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container fluid>

          <Col className="d-flex align-items-center">
            <Navbar.Brand href="#home"
                          style={ { color: 'gold' } }>
              <h4 className="d-flex ">BREWDOG</h4>
            </Navbar.Brand>
          </Col>

            <Nav className="me-auto">
              <Container fluid classname="d-flex flex-row ">
                <Col xs={ { span: 2, offset: 2 } }
                             md={ { span: 2, offset: 2 } }
                             xl={ { span: 2, offset: 2 } }>
                <h6 style={ { color: 'white'}}
                    onClick={ () => handlRandom() }>Random beer</h6>
              </Col>
                <h6 style={ { color: 'white'}}
                          onClick={ () => handleFavorites() }>
                  Favorites</h6>
              </Container>
            </Nav>

        </Container>
      </Navbar></>
  )
}