import styled         from 'styled-components'
import { ItemGrid }   from '../layout/ScreenComposition'
import { useContext } from 'react'
import { AppContext } from '../../App'
import { Star }       from './Star'

const ListLayout = styled.ul`
  list-style: none;
  grid-area: ${ props => props.area };
  align-items: start;
  padding: 2% 6% 2% 6%;
`
const ListItemLayout = styled.li`
  display: grid;
  grid-template-areas: "name abv star";
  grid-template-columns: 66% 16.5% 16.5%;
  justify-content: stretch;
  align-self: center;
  background-color: white;
  margin: 2% 0 2% 0;
  border-radius: 5px;
  /*color: gray;*/
  &:hover {
    background-color: gold;
    color: white;
  }
`
export const List = (props) => {
  const [state, dispatch] = useContext(AppContext)
  const { beersInPage } = state
  const handleModal = (item) =>
    dispatch({ type: 'MODAL_OPEN', payload: item })

   /*localStorage.clear()*/
  return (
    <>
      <ListLayout area={ 'c' }>
        { props.arrayIn.map(item =>
          <ListItemLayout key={ item.id }>
            <ItemGrid ps={ 'center start' }
                      area={ 'name' }
                      onClick={ () => handleModal(item) }>
              { item.name }</ItemGrid>
            <ItemGrid ps={ 'center end' }
                      area={ 'abv' }>{ item.abv }</ItemGrid>
            <ItemGrid ps={ 'center end' }
                      m={ '0 0 5.5% 0' } area={ 'star' }>
              <Star key={ item.id } item={ item }/>
            </ItemGrid>
          < /ListItemLayout>,
        ) }
      </ListLayout>
    </>
  )

}