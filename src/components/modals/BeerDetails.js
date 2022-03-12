import styled              from 'styled-components'
import { Modal }           from 'react-bootstrap'
import { useContext }      from 'react'
import { AppContext }      from '../../App'
import { ModalNavigation } from './ModalNavigation'
import { ModalHeader }     from './ModalHeader'

const ModalBody = styled.div`
  display: grid;
  grid-template-areas: "food ... ..."
                       "abb1 abb2 abb3";
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-row: auto;
`

export const BeerDetails = () => {
  const [state, dispatch] = useContext(AppContext)
  const { isModal, db, modalItemIndex } = state
  const handleClose = () => dispatch({ type: 'MODAL_OPEN' })

  return (

    <>
      <Modal
        show={ isModal }
        onHide={ () => handleClose() }
        size={ 'lg' }>

        <ModalNavigation/>
        <ModalHeader/>
        <Modal.Body>Body!</Modal.Body>

      </Modal>
    </>
  )
}