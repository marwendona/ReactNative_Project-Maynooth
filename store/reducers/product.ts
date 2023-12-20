const initialState = {
  title: '',
  price: 0,
  favoris: false,
  products: [],
  selectedProduct : {}
}

const productReducer = (state = initialState, action: { type: any , payload : any}) => {
  switch (action.type) {
    case 'SET_SELECTED_PRODUCT':
      return {
        ...state,
        selectedProduct: action.payload,
      }
    case 'FAVORIS':
      return {
        ...state,
        favoris: !state.favoris
      }
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload
      }  
    default:
      return state
  }
}

export default productReducer
