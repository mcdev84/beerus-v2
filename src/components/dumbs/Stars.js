import { BsStar, BsStarFill }   from 'react-icons/bs'
import { useContext, useState } from 'react'
import { AppContext }           from '../layout/ScreenLayout'

export default function Stars ({ item, classname }) {
  const [appState, setState] = useContext(AppContext)
  const [isClicked, setClick] = useState(false)
  const { favItems } = appState
  const handleClick = () => {
    setClick(!isClicked)
    setState(prevAppState => ({
      ...prevAppState,
      favItems: [...prevAppState.favItems, item],
    }))
    localStorage.setItem('FavList', JSON.stringify(favItems))
  }

  return (
    isClicked ?
      <span><BsStarFill className={ classname }
                        onClick={ () => handleClick() }/> </span> :
      <span> <BsStar className={ classname }
                     onClick={ () => handleClick() }/></span>
  )
}