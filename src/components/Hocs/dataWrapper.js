/*
import { createContext, useEffect, useReducer } from 'react'
import reducer                                  from '../../store/reducer'
import useFetch                                 from '../utils/hooks/useFetch'

export const AppContext = createContext()

export const dataWrapper = (Component) => {

  return props => {
    const [appState, dispatch] = useReducer(reducer, {
      isModalBeerOpen: false,
      favItems       : [],
      modalItem      : {},
      page           : {
        pageId : 1,
        pagePer: 25,
      },
      random         : false,
      favIsOpen:false,
    })

    return (
      <>
        <AppContext.Provider value={ [appState, dispatch ] }>
          <Component { ...props } />
        </AppContext.Provider>

      </>
    )
  }
}*/
