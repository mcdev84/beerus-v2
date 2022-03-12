import { useContext } from 'react'
import { AppContext } from '../../App'
import styled         from 'styled-components'

const SinglePageLayout = styled.h5`
  display: inline-grid;
  border: 1px solid gold;
  border-radius: 3px;
  margin: 0 0 0 0.25em;
  &:hover{
    color:white;
    background-color: gold;
  }
`

export const Pages = () => {
  const [state, dispatch] = useContext(AppContext)
  const { currentPage } = state

  const handlePage = (clickedPage) =>
    dispatch({ type: 'HANDLE_PAGES', payload: clickedPage })

  const pags = (n) => [...new Array(4)].map(() => n++)

  return (
    <>
      { pags(currentPage)
        .map(
          el => <SinglePageLayout key={ el } onClick={ () => handlePage(el) }>
            { el }
          </SinglePageLayout>) }
    </>
  )
}