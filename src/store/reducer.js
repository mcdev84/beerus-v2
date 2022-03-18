export function reducer (state, action) {
  const newState = { ...state }

  switch (action.type) {

    case 'INIT':
      return ({ ...newState, db: newState.db = action.payload })

    case 'SEARCH_NAME_FOOD':
      newState.beerName = action.payload === '' ? '_' : action.payload
      return newState

    case 'SEARCH_MIN':
      newState.abvGt = action.payload === '' ? '0' : action.payload
      return newState

    case 'SEARCH_MAX':
      newState.abvLt = action.payload === '' ? '56' : action.payload
      return newState

    case 'OPEN_FAVS':
      if (action.payload === null) {
        newState.isFavOpen = false
      } else {
        newState.isFavOpen = !newState.isFavOpen
      }
      return newState

    case 'RANDOM':
      return ({ ...newState, random: !newState.random })

    case 'MODAL_OPEN':
      return ({
        ...newState,
        isModal  : !newState.isModal,
        modalItem: newState.modalItem = action.payload,
      })

    case 'MODAL_TOGGLE':
      return ({ ...newState, isModal: !newState.isModal })

    case 'HANDLE_PAGES':
      if (action.payload <= 10) {
        newState.currentPage = action.payload
      } else {
        newState.currentPage = 10
      }
      return newState

    case 'NEXT_ITEM':
      return ({
        ...newState,
        modalItem: newState.modalItem = action.payload,
      })
    case 'PREV_ITEM':
      newState.modalItem = action.payload
      return newState

    default:
      return state
  }
}