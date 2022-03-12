import styled         from 'styled-components'
import { RegularNav } from './RegularNav'
import { SearchBar }  from '../dumbs/SearchBar'

const HeaderLayout = styled.header`
  width: 100%;
  display: grid;
  grid-area: ${ props => props.area };
  grid-template-areas: "brand rand favs"
                        "s1 s2 s3";
  grid-template-columns: 50% 2fr 2fr;
  grid-template-rows: 3em 1.6em;
  background-color: ${ props => props.bg };
  padding: 0 6% 1%;
`
export const Header = () => {

  return (
    <HeaderLayout bg={ 'black' } area={ 'header' }>
      <RegularNav name={'BREWDOG'}
      area={'brand'} area1={'rand'} area2={'favs'}/>
      <SearchBar/>
    </HeaderLayout>
  )
}