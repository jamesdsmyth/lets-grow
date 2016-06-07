import { createStore, combineReducers } from 'redux'

import FoodReducer from '../reducers/FoodReducer'

var Reducer = combineReducers({
    FoodState: FoodReducer
})

let Store = createStore(Reducer)

export default Store
