import { combineReducers, createStore } from 'redux'
import counterReducer from './reducers/counter'
import productReducer from './reducers/product'
import userReducer from "./reducers/user";

const initialState = {}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const rootReducer = combineReducers({
  counter: counterReducer,
  product: productReducer,
  user: userReducer
})

// const store = createStore(counterReducer)
const store = createStore(rootReducer)

export default store
