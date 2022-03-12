import styled         from 'styled-components'
import { AppContext } from '../../App'
import { useContext } from 'react'
import { ItemGrid }   from '../layout/ScreenComposition'
import { Modal }      from 'react-bootstrap'

const TotalBody = styled(Modal.Body)`
  background-color: whitesmoke;
`

const ModalBod = styled.div`
  display: grid;
  grid-template-areas: "... descr descr ... ... ..."
                       "... abb0 abb1 abb2 abb3 ...";
  grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 0.5fr;
  grid-template-row: auto clamp(10%, 25%, 50% );
  gap: 1em;
  place-self: center end;
`

export const ModalBody = () => {
  const [state, dispatch] = useContext(AppContext)
  const { db, modalItem } = state
  const foodP = (n) => `abb${ n }`

  return (
    <TotalBody>
      <ModalBod>
        <ItemGrid area={ 'descr' } ps={ 'start' } m={ '0 0 0 %' }>
          <h5>Food pairs</h5>
        </ItemGrid>

        { modalItem.food_pairing.map((el, i) =>
          <ItemGrid boxShad={ '10px 10px 0 gold' } area={ foodP(i) }
                    key={ [el, i] } pi={' start center'} pc={'center'}
                    pad={ '1%' } display={'grid'} bg={'white'} pad={'5%'}>
            <p style={ { textAlign: 'center' } }>"{ el }"</p>
          </ItemGrid>,
        )
        }
      </ModalBod>
    </TotalBody>

  )
}