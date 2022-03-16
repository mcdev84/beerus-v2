import styled from 'styled-components'

const HeaderLayout = styled.header`
  display: grid;
  grid-template-areas:"brand rand favs";
  grid-area: ${ props => props.area };
  grid-template-columns: 50% 2fr 2fr;
  grid-template-rows: 3em 1.6em;
  background-color: ${ props => props.bg };
  padding: 0 6% 0 6%;
`

export const Header = (props) => {

  return (
    <HeaderLayout bg={ 'black' } area={props.area}>
      { props.children }
    </HeaderLayout>
  )
}