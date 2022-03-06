import { Col, FormControl, InputGroup } from 'react-bootstrap'
import { useContext, useState }         from 'react'
import { AppContext }                   from '../layout/ScreenLayout'

export const SearchBar = ({ span, placeholder, classname, offset }) => {
  const [appState, setState] = useContext(AppContext)

  const handleSearch = () => setState(prevAppState=> ({ ...prevAppState,
      search: !prevAppState.search,
    }))
  console.log(appState.search )
  return (

    <Col xs={ { span: span, offset: offset } }
         md={ { span: span, offset: offset } }
         xl={ { span: span, offset: offset } }>
      <InputGroup className="mb-3">
        <FormControl className={ classname }
                     placeholder={ placeholder }
                     aria-label={ placeholder }
                     aria-describedby="basic-addon1"
                     onClick={ ()=> handleSearch()
        }
        />
      </InputGroup>
    </Col>
  )
}