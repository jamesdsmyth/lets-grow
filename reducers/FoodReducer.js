import Data from '../store/Data'

var FoodReducer = (state = Data.food, action) => {
    console.log('reducer called with state ', state , ' and action ', action);

    var foodItem = action.food;
    console.log(foodItem)

    let newState = Object.assign({}, state); // creating a new state using the Object.assign method
    switch (action.type) {

        case 'START_GROWING':


            newState[foodItem] = {
                ...state[foodItem],
                startedGrowing: action.time
            }

            return newState;
            break;

        case 'STOP_GROWING':

            newState[foodItem] = {
                ...state[foodItem],
                stoppedGrowing: action.time
            }

            return newState
            break;
        default:
            return state;
    }
}

export default FoodReducer
