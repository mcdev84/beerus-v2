export const favList = []
export default function reducer (state, action) {
  const newState = { ...state }

  switch (action.type) {

    case 'INIT':
      console.log(action.payload)
      return { ...newState, beers: newState.beers = [...action.payload] }

    case 'BEER_CLICK':
      const listCheck = newState.favItems.length > 0 ? newState.favItems.filter(
          item => (item.id !== action.payload.id)
                  && ({
              ...newState, favItems:
                [...newState.favItems, action.payload.id],
            }))
        : ({ ...newState, favItems: [action.payload.id] })

      localStorage.setItem('FavList', JSON.stringify(favList))
      console.log(newState.favItems)

      return {
        ...newState,
        isModalBeerOpen: !newState.isModalBeerOpen,
        modalItem      : newState.modalItem = action.payload,
      }

    case 'BEER_CLOSE':
      return {
        ...newState,
        isModalBeerOpen: !newState.isModalBeerOpen,
      }

    default:
      return newState
  }
}