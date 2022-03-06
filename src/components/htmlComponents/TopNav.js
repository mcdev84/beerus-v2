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
        <Container>

          <Col xs={ 6 } md={ 6 } xl={ 6 } className="d-flex align-items-center">
            <Navbar.Brand href="#home"
                          style={ { color: 'gold' } }>
              <h4 className="d-flex float-left">BREWDOG</h4>
            </Navbar.Brand>
          </Col>
          <Col xs={ { span: 4, offset: 2 } }
               md={ { span: 4, offset: 2 } }
               xl={ { span: 4, offset: 2 } }>
            <Nav className="me-auto">
              <Container>
                <Nav.Link href="#home"
                          onClick={ () => handlRandom() }>Random beer</Nav.Link>
                <Nav.Link href="#features"
                          onClick={ () => handleFavorites() }>
                  Favorites</Nav.Link></Container>
            </Nav>
          </Col>
        </Container>
      </Navbar></>
  )
}