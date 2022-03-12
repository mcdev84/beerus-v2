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

    case 'FAVORITES':
      newState.favs = Array.from(new Set([...newState.favs, action.payload]))
      localStorage.setItem('Favorites', JSON.stringify(newState.favs))
      return newState

    case 'OPEN_FAVS':
      return { ...newState, isFavOpen: !newState.isFavOpen }

    case 'RANDOM':
      return ({ ...newState, random: !newState.random })

    case 'MODAL_OPEN':
      return ({ ...newState,
        isModal: !newState.isModal,
        modalItemIndex: newState.modalItemIndex = action.payload })

    default:
      return state
  }
}