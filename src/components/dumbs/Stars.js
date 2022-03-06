import { BsStar, BsStarFill }   from 'react-icons/bs'
import { useContext, useState } from 'react'
import { AppContext }           from '../layout/ScreenLayout'

export default function Stars ({ item, classname }) {
  const [appState, setState] = useContext(AppContext)
  const [isClicked, setClick] = useState(false)
  const { favItems } = appState

  const handleClick = (item) => {

    setClick(!isClicked)
    !isClicked ? setState(prev => ({
      ...prev,
      favItems: [...prev.favItems, item],
    })) : setState(prev=> {
      return { ...prev, favItems: prev.favItems.filter(el=>el.id!==item.id) }
    })
    console.log(favItems)
    sessionStorage.setItem('FavList', JSON.stringify(favItems))
  }

  return (
    isClicked ?
      <span><BsStarFill className={ classname }
                        onClick={ () => handleClick(item) }/> </span> :
      <span> <BsStar className={ classname }
                     onClick={ () => handleClick(item) }/></span>
  )
}