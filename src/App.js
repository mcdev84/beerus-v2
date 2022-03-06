import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container }    from 'react-bootstrap'
import { ScreenLayout } from './components/layout/ScreenLayout'

function App () {
/*  const ScreenLayoutWithContext = dataWrapper(ScreenLayout)*/

  return (
    <Container fluid className="App">
      <ScreenLayout/>
    </Container>
  )
}

export default App
