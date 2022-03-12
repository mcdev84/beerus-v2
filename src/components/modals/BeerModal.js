import { Modal }           from 'react-bootstrap'
import { useContext }      from 'react'
import { AppContext }      from '../../App'
import { ModalNavigation } from './ModalNavigation'
import { ModalHeader }     from './ModalHeader'
import { ModalBody }       from './ModalBody'
import { BeerInfos }       from './BeerInfos'

export const BeerModal = () => {
  const [state, dispatch] = useContext(AppContext)
  const { isModal } = state
  const handleClose = () => dispatch({ type: 'MODAL_OPEN' })

  return (

    <>
      <Modal
        show={ isModal }
        onHide={ () => handleClose() }
        fullscreen={ true }>

        <ModalNavigation/>
        <ModalHeader/>
        <BeerInfos/>
        <ModalBody/>
      </Modal>
    </>
  )
}