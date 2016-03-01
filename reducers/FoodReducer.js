import Data from '../store/Data'

var FoodReducer = (state = Data.food, action) => {
    console.log('reducer called with state ', state , ' and action ', action);

    var foodItem = action.food;
    console.log(foodItem)
    switch (action.type) {

        case 'START_GROWING':
            return {...state,
                apples: {
                    ...state.apples,
                    startedGrowing: action.time
                }
            }
        break;
        default:
            return state;
    }
}

export default FoodReducer
