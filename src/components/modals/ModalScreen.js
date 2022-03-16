import { Modal }       from 'react-bootstrap'
import { useContext }  from 'react'
import { AppContext }  from '../../App'
import { ModalFooter } from './ModalFooter'
import { BeerInfos }   from './BeerInfos'
import { TopNav }      from '../layout/TopNav'
import { Header }    from '../layout/Header'
import { ModalBody } from './ModalBody'
import styled        from 'styled-components'

const ModalScreenLayout = styled.section`
  display: grid;
  grid-template-areas: "header header header header"
                        ". body body ."
                        ". footer footer .";

`

export const ModalScreen = () => {
  const [state, dispatch] = useContext(AppContext)
  const { isModal } = state
  const handleClose = () => dispatch({ type: 'MODAL_OPEN' })
  const handleAllBeers = () => dispatch({ type: 'MODAL_TOGGLE' })
  return (

    <ModalScreenLayout>
      <Modal
        show={ isModal }
        onHide={ () => handleClose() }
        fullscreen={ true }>

        <Header area={'header'}>
          <TopNav area={ 'brand' } area1={ 'rand' } area2={ 'favs' }
                  handleClick={ handleAllBeers }/>
        </Header>
        <ModalBody/>
        <ModalFooter/>

      </Modal>
    </ModalScreenLayout>
  )
}