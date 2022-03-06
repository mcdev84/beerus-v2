import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { AppContext }                       from '../layout/ScreenLayout'
import { useContext }                       from 'react'

export const TopNav = () => {

  const [appState, setState] = useContext(AppContext)
  const handleFavorites = () =>
    setState(prevAppState => ({
      ...prevAppState,
      favIsOpen: !prevAppState.favIsOpen,
    }))
  const handlRandom = () =>
    setState(prevAppState => ({
         ...prevAppState,
      random: !prevAppState.random
       }))


  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>

          <Col xs={ 6 } md={ 6 } xl={ 6 }>
            <Navbar.Brand href="#home"
                          style={ { color: 'gold' } }>BREWDOG
            </Navbar.Brand>
          </Col>
          <Col xs={ { span: 4, offset: 2 } }
               md={ { span: 4, offset: 2 } }
               xl={ { span: 4, offset: 2 } }>
            <Nav className="me-auto">
              <Nav.Link href="#home"
                        onClick={()=>handlRandom()}>Random beer</Nav.Link>
              <Nav.Link href="#features"
                        onClick={ () => handleFavorites() }>
                Favorites</Nav.Link>
            </Nav>
          </Col>
        </Container>
      </Navbar></>
  )
}