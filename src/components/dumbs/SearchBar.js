import { Col, FormControl, InputGroup } from 'react-bootstrap'
import { useContext, useState } from 'react'
import { AppContext, beersDb }  from '../layout/ScreenLayout'

export const SearchBar = ({ span, placeholder, classname, offset, inputCapture, id}) => {
  const [appState, setState, beersDb] = useContext(AppContext)





  return (

    <Col xs={ { span: span, offset: offset } }
         md={ { span: span, offset: offset } }
         xl={ { span: span, offset: offset } }>
      <InputGroup className="mb-3">
        <FormControl className={ classname }
                     placeholder={ placeholder }
                     aria-label={ placeholder }
                     aria-describedby="basic-addon1"
                     onChange={ (e)=>
                       inputCapture[id](e) }
        />
      </InputGroup>
    </Col>
  )
}