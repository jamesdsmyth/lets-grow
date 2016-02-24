import Data from '../store/Data'

var FoodStore = (state = Data.food, action) => {
    console.log(state)
    return state;
}

export default FoodStore
