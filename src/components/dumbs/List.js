import { Col, Container, Row } from 'react-bootstrap'
import { useContext }          from 'react'
import { AppContext, beersDb } from '../layout/ScreenLayout'
import Stars                   from './Stars'

export const List = ({ array, ulclass, liclass }) => {
  const [appState, setState, beersDb] = useContext(AppContext)
  const { isModalBeerOpen, modalItem, favIsOpen } = appState

  const handleBeer = (beer) =>
    setState(prevAppState => ({
      ...prevAppState,
      isModalBeerOpen: !prevAppState.isModalBeerOpen,
      modalItem      : prevAppState.modalItem = beer,
    }))

  return (
    <>
      <Row xs={ 12 }
           md={ 12 }
           xl={ 12 } className="d-flex align-items-start">
        <ul className="d-flex flex-column ">
          { array.map(obj =>
            <li key={ obj.id } className="li-beer p-2">
              <section className="d-flex  ">
                <Container fluid className="d-flex flex-row p-0 selection-item">
                  <Col className="d-flex align-items-start ">

                    <em onClick={ () => handleBeer(obj) }>
                      { obj.name }
                    </em>
                  </Col>
                  <Col xs={ { span: 2, offset: 4 } }
                       className="d-flex flex-row align-content-end justify-content-around">

                      { obj.abv }%
                      { !favIsOpen && <Stars item={ obj }
                                                   classname={ 'stars' }/> }


                  </Col>
                </Container>
              </section>
            </li>

          )
          }
        </ul>
      </Row>
    </>
  )
}
