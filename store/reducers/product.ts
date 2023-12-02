const initialState = {
  title: '',
  price: 0,
  favoris: false
}

const productReducer = (state = initialState, action: { type: any }) => {
  switch (action.type) {
    case 'FAVORIS':
      return {
        ...state,
        favoris: !state.favoris
      }
    default:
      return state
  }
}

export default productReducer
