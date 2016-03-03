import Data from '../store/Data'

var FoodReducer = (state = Data.food, action) => {
    console.log('reducer called with state ', state , ' and action ', action);

    var foodItem = action.food;
    console.log(foodItem)
    switch (action.type) {

        case 'START_GROWING':
            let newState = Object.assign({}, state);

            newState[action.food] = {
                ...state[action.food],
                startedGrowing: action.time
            }

            return newState
        default:
            return state;
    }
}

export default FoodReducer
