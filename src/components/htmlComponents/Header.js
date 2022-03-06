import { Col, Container } from 'react-bootstrap'
import { TopNav }         from './TopNav'
import { SearchBar }      from '../dumbs/SearchBar'

export const Header = () => {

	return (
		<>
			<header>
				<Container fluid>
					<TopNav/>
					<Container fluid className="bg-dark">
						<Col className="d-none d-sm-flex align-items-start"
						     xs={ { span: 4, offset: 6 } }
						     md={ { span: 4, offset: 6 } }
						     xl={ { span: 4, offset: 6 } }>
							<h6 style={ { color: 'lightgray' } }><small>Gradazione alcolica
							                                            (da
							                                            - a )</small></h6>
						</Col>
					</Container>
					<Container fluid className="d-none d-sm-flex p-0 bg-dark
						justify-content-between">
						<SearchBar span={ 4 }
						           offset={ 0 }
						           placeholder="Filtra per nome o abbinamento"
						           classname="top-search"/>
						<SearchBar span={ 3 } offset={ 2 } placeholder="DA"
						           classname="top-search"/>
						<SearchBar span={ 3 } offset={ 0 } placeholder="A"
						           classname="top-search"/>
					</Container>

					<Container fluid className="d-xs-flex d-sm-none p-0">
						<SearchBar colWidth={ 12 }/>
					</Container>
				</Container>
			</header>
		</>
	)
}