import { Col, Container, Modal, Row } from 'react-bootstrap'
import { useContext }          from 'react'
import { AppContext, beersDb } from '../layout/ScreenLayout'
import Stars                   from '../dumbs/Stars'
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export const SingleBeer = () => {
  const [appState, setState, beersDb]= useContext(AppContext)
  const { isModalBeerOpen, modalItem } = appState
  const { food_pairing } = modalItem
  const $modalFooter = ['abv', 'srm', 'ibc', 'ibu', 'ph']
  const handleModalBeer = () =>
    setState(prevAppState => ({
      ...prevAppState,
      isModalBeerOpen: !prevAppState.isModalBeerOpen,
    }))

  return (

    <>
      <Modal
        show={ isModalBeerOpen }
        onHide={ handleModalBeer }
        fullscreen={ true }

      >
        <Modal.Header closeButton>
          <Container fluid className="d-flex">
            {/*LEFT*/ }
            <Col xs={ 8 } md={ 8 }
                 className="d-flex flex-column
                 justify-content-between ">

              <Container fluid className="d-flex title pb-3">
                <Modal.Title className="d-flex  pt-3 flex-row ">

                  <Container fluid className="">
                    <h4 className="d-flex align-items-center"
                        style={ { color: 'gold' } }>
                      <Stars item={ modalItem }
                             classname={ 'stars' }/>
                      { modalItem.name }
                    </h4>
                    <h4 style={ { color: 'gold' } }>
                      { modalItem.tagline }
                    </h4>

                  </Container>
                </Modal.Title>
              </Container>

              {/*DESCRIPTION*/ }
              <Container fluid className="description d-flex">

                <Container className="d-flex align-items-center">
                  <span><h6>Description</h6>
                  <p style={ { fontSize: '0.6em', textAlign: 'left' } }
                     className="d-flex text-left pl-0">
                    { modalItem.description }
                  </p></span>
                </Container>

              </Container>
            </Col>
            {/*RIGH*/ }
            <Col xs={ 4 } md={ 4 }
                 className="d-flex align-items-start right justify-content-center">
              <img alt={ modalItem.name } src={ modalItem.image_url }
                   className="image-beer d-flex img-responsive justify-content-center pt-3"/>
            </Col>
          </Container>
        </Modal.Header>
        <Container fluid className="d-flex foot">
          { $modalFooter.map((item, i) =>
            <span key={ i }
                  style={ { color: 'white' } }> { item.toUpperCase() } :
              { modalItem[item] } </span>,
          ) }
          {/*<List array={ $modalFooter }
           ulclass={'foot-ul'}
           liclass={'foot-li'}/>*/ }
        </Container>
        <Modal.Body>
          {/*BODY*/ }
          <Container fluid
                     className="d-flex flex-column justify-content-start">
            <Container fluid className="d-flex ">
              <p className="d-flex text-left abbinamenti ">Abbinamenti</p>
            </Container>
            <Container fluid
                       className="d-flex  justify-content-evenly prefood-pairing">

              { food_pairing !== undefined && food_pairing.map((item) =>
                <Col xs={ 3 } md={ 3 } lg={ 3 } xl={ 3 } fluid as={ 'section' }
                     className="food_pairing">
                  <Container as={ 'article' }>
                    <p className="text-center">"{ item }"</p>
                  </Container>
                </Col>,
              ) }
            </Container>
          </Container>
        </Modal.Body>

      </Modal>


    </>

  )
}
