import Data from '../store/Data'

var FoodReducer = (state = Data.food, action) => {
    console.log('reducer called with state ', state , ' and action ', action);

    var foodItem = action.food;
    let newState = Object.assign({}, state); // creating a new state using the Object.assign method

    switch (action.type) {
        case 'START_GROWING':
            newState[foodItem] = {
                ...state[foodItem],
                startedGrowing: action.time,
                lastWatered: action.time,
                isGrowing: true,
                isWatered: true
            }

            return newState;
            break;

        case 'STOP_GROWING':
            newState[foodItem] = {
                ...state[foodItem],
                stoppedGrowing: action.time,
                isGrowing: false,
                isWatered: false
            }

            return newState;
            break;

        case 'JUST_WATERED':
            newState[foodItem] = {
                ...state[foodItem],
                lastWatered: action.time,
                isWatered: true
            }

            return newState;
            break;

        case 'NEEDS_WATERING':
            newState[foodItem] = {
                ...state[foodItem],
                isWatered: false
            }

            return newState;
            break;

        default:
            return state;
    }
}

export default FoodReducer
