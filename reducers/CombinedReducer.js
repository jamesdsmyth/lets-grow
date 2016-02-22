import { createStore, combineReducers } from 'redux'

import FoodStore from '../reducers/FoodStore'

var Reducer = combineReducers({
    FoodState: FoodStore
})

let Store = createStore(Reducer);

export default Store
