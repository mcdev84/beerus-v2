import { Row }        from 'react-bootstrap'
import { useContext } from 'react'
import { AppContext } from '../layout/ScreenLayout'
import Stars          from './Stars'

export const List = ({ array, ulclass, liclass }) => {
  const [appState, setState] = useContext(AppContext)
  const { isModalBeerOpen, modalItem, favIsOpen } = appState

  const handleBeer = (beer) =>
  setState(prevAppState=> ({ ...prevAppState,
    isModalBeerOpen: !prevAppState.isModalBeerOpen,
    modalItem: prevAppState.modalItem=beer
  }))

  return (
    <>
      <Row xs={ 12 }
           md={ 12 }
           xl={ 12 } className="d-flex align-items-start">
        <ul className="d-flex flex-column ">
          { array.map(obj =>
            <li key={ obj.id }>
              <section className="d-flex">
                <em onClick={()=>handleBeer(obj)}>
                  { obj.name }
                </em>
                <span>{ obj.abv }</span>
                {!favIsOpen&&<Stars item={obj} classname={'stars'}/>}
              </section>
            </li>)
          }
        </ul>
      </Row>
    </>
  )
}
